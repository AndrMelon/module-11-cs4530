import * as db from "./transcriptManager";

/*
Tests for the Transcript Manager. 
 */
describe('TranscriptManager', () => {

  describe('Test data initialization', () => {
    it('allTranscripts should be initialized to []', () => {
      expect(db.getAll()).toEqual([]);
    });
  });

  describe('Test functions', () => {
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

        db.addGrade(studentID, 'test course2', 1);
        const grade2 = db.getGrade(studentID, 'test course2');
        expect(grade2).toBe(1);
      })

      it('Should throw an error if the student ID is invalid', () => {
        db.addStudent('test student');
        const invalidID = -1;
        expect(() => db.addGrade(invalidID, 'test course', 100)).toThrowError(`no student with ID = ${invalidID}`);
      });
      it('Should throw an error if the student ID already has a grade in that class', () => {
        const studentID = db.addStudent('test student');
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
      it('Should fail to get grade for a course that does not exist', () => {
        const avery2 = db.addStudent('avery');
        const course = 'test course'
        db.addGrade(avery2, course, 100);

        //Probably should be checking if arrays contain same set of IDs, permitting different orders...
        const invalidCourse = 'wrong course';
        expect(() => db.getGrade(avery2, invalidCourse)).toThrowError(`no grade for student ${avery2} in course ${invalidCourse}`);
      })
      it('Should fail to get grade for a student that does not exist', () => {
        db.addStudent('avery');
        const invalidID = -1;
        const courseName = 'some course';
        expect(() => db.getGrade(invalidID, courseName)).toThrowError(`no grade for student ${invalidID} in course ${courseName}`);
      })
      it('Should get the correct grade when multiple students are present', () => {
        db.addStudent('avery');
        const bobID = db.addStudent('bob');
        const courseName = 'some course';
        db.addGrade(bobID, courseName, 50);

        expect(db.getGrade(bobID, courseName)).toBe(50);
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
});
