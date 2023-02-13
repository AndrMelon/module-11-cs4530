// @ts-nocheck
import * as db from "./transcriptManager";

/*
Tests for the Transcript Manager. 
 */
describe('TranscriptManager', () => {

  beforeEach(() => {
    // Before any test runs, clean up the datastore. This should ensure that tests are hermetic.
    db.initialize();
  })

  describe('Create student', () => {
    it('should return an ID, starting with 1', () => {
      const ret = db.addStudent('avery');
      expect(ret).toEqual(1);
    });

  })
  describe('Create a student and get its transcript', () => {
    it('intializes with zero grades', () => {
      const ret = db.addStudent('avery2');
      expect(db.getTranscript(ret)?.grades.length).toEqual(0);

    });
    it('return the correct student', () => {
      const ret = db.addStudent('avery2');
      db.addGrade(ret, 'test course', 100);
      expect(db.getTranscript(ret)?.student.studentID).toEqual(ret);

    });
  })
  describe('Adding grades', () => {
    it('should add the grade to the transcript', () => {
      const studentID = db.addStudent('test student');
      db.addGrade(studentID, 'test course', 100);
      const grade = db.getGrade(studentID, 'test course');
      expect(grade).toBe(100);
    })

    it('Should throw an error if the student ID is invalid', () => {
      expect(() => db.addGrade(1, 'test course', 100)).toThrowError();
    });
    it('Should throw an error if the student ID already has a grade in that class', () => {
      const studentID = db.addStudent('test student');
      const course = 'test course';
      db.addGrade(studentID, course, 100);
      expect(() => db.addGrade(studentID, 'test course', 100)).toThrowError(`student ${studentID} already has a grade in course ${course}`);
    });
    it('Should throw an error if the student ID already has a grade in that class', () => {
      const studentID = db.addStudent('test student');
      const studentID2 = db.addStudent('test student2');
      const course = 'test course';
      db.addGrade(studentID, course, 100);
      expect(() => db.addGrade(studentID, 'test course', 100)).toThrowError(`student ${studentID} already has a grade in course ${course}`);
    });

  })
  describe('getStudentIDs', () => {
    it('Should return only the students who match the name', () => {
      const avery1 = db.addStudent('avery');
      const avery2 = db.addStudent('avery');
      const ripley = db.addStudent('ripley');

      //Probably should be checking if arrays contain same set of IDs, permitting different orders...
      expect(db.getStudentIDs('avery')).toEqual([avery1, avery2]);
      expect(db.getStudentIDs('ripley')).toEqual([ripley]);
    })
  });
  describe('getGrade', () => {
    it('Should fail to get grade for a student that does not exist', () => {
      const avery2 = db.addStudent('avery');
      const course = 'test course'
      db.addGrade(avery2, course, 100);


      //Probably should be checking if arrays contain same set of IDs, permitting different orders...
      expect(() => db.getGrade(avery2, 'wrong course')).toThrowError(`no grade for student ${avery2} in course ${course}`);
    })
  })
  describe('Deleting students', () => {
    it('Should result in the students\' transcript no longer being available', () => {
      const studentID = db.addStudent('test student');
      db.deleteStudent(studentID);
      expect(db.getTranscript(studentID)).toBeUndefined();
    })
    it('Should result in only the deleted students\' transcript no longer being available', () => {
      const studentID = db.addStudent('test student');
      const studentID2 = db.addStudent('test student2');
      const numTranscripts = db.getAll().length;
      db.deleteStudent(studentID);
      expect(db.getTranscript(studentID)).toBeUndefined();
      expect(db.getAll().length).toEqual(numTranscripts - 1);
      expect(db.getTranscript(studentID2)).not.toBeUndefined();
    })
    it('Should throw an error if the ID is invalid', () => {
      const StudentID = -1;
      const studentID2 = db.addStudent('test student');
      expect(() => db.deleteStudent(StudentID)).toThrowError(`no student with ID = ${StudentID}`);
    })
  })
  describe('getAll', () => {
    it('Should return the transcripts', () => {
      expect(db.getAll()).toEqual([]);
    });
  });
});
