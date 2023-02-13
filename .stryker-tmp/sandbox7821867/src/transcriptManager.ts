// @ts-nocheck
// manage the transcript database
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export type StudentID = number;
export type Student = {
  studentID: number;
  studentName: string;
};
export type Course = string;
export type CourseGrade = {
  course: Course;
  grade: number;
};
export type Transcript = {
  student: Student;
  grades: CourseGrade[];
};

// the database of transcript
let allTranscripts: Transcript[] = stryMutAct_9fa48("1973") ? ["Stryker was here"] : (stryCov_9fa48("1973"), []);
export function initialize(): void {
  if (stryMutAct_9fa48("1974")) {
    {}
  } else {
    stryCov_9fa48("1974");
    allTranscripts = stryMutAct_9fa48("1975") ? ["Stryker was here"] : (stryCov_9fa48("1975"), []);
  }
}
export function addDemoData(): void {
  if (stryMutAct_9fa48("1976")) {
    {}
  } else {
    stryCov_9fa48("1976");
    addStudent(stryMutAct_9fa48("1977") ? "" : (stryCov_9fa48("1977"), 'avery'), stryMutAct_9fa48("1978") ? [] : (stryCov_9fa48("1978"), [stryMutAct_9fa48("1979") ? {} : (stryCov_9fa48("1979"), {
      course: stryMutAct_9fa48("1980") ? "" : (stryCov_9fa48("1980"), 'DemoClass'),
      grade: 100
    }), stryMutAct_9fa48("1981") ? {} : (stryCov_9fa48("1981"), {
      course: stryMutAct_9fa48("1982") ? "" : (stryCov_9fa48("1982"), 'DemoClass2'),
      grade: 100
    })]));
    addStudent(stryMutAct_9fa48("1983") ? "" : (stryCov_9fa48("1983"), 'blake'), stryMutAct_9fa48("1984") ? [] : (stryCov_9fa48("1984"), [stryMutAct_9fa48("1985") ? {} : (stryCov_9fa48("1985"), {
      course: stryMutAct_9fa48("1986") ? "" : (stryCov_9fa48("1986"), 'DemoClass'),
      grade: 80
    })]));
    addStudent(stryMutAct_9fa48("1987") ? "" : (stryCov_9fa48("1987"), 'blake'), stryMutAct_9fa48("1988") ? [] : (stryCov_9fa48("1988"), [stryMutAct_9fa48("1989") ? {} : (stryCov_9fa48("1989"), {
      course: stryMutAct_9fa48("1990") ? "" : (stryCov_9fa48("1990"), 'DemoClass'),
      grade: 85
    }), stryMutAct_9fa48("1991") ? {} : (stryCov_9fa48("1991"), {
      course: stryMutAct_9fa48("1992") ? "" : (stryCov_9fa48("1992"), 'DemoClass'),
      grade: 40
    })]));
    addStudent(stryMutAct_9fa48("1993") ? "" : (stryCov_9fa48("1993"), 'casey'), stryMutAct_9fa48("1994") ? [] : (stryCov_9fa48("1994"), [stryMutAct_9fa48("1995") ? {} : (stryCov_9fa48("1995"), {
      course: stryMutAct_9fa48("1996") ? "" : (stryCov_9fa48("1996"), 'DemoClass'),
      grade: 100
    })]));
  }
}
export function getAll(): Transcript[] {
  if (stryMutAct_9fa48("1997")) {
    {}
  } else {
    stryCov_9fa48("1997");
    return allTranscripts;
  }
}

// manages the student IDs
class StudentIDManager {
  private static lastUsedID = 0;
  public static newID(): number {
    if (stryMutAct_9fa48("1998")) {
      {}
    } else {
      stryCov_9fa48("1998");
      stryMutAct_9fa48("1999") ? this.lastUsedID-- : (stryCov_9fa48("1999"), this.lastUsedID++);
      return this.lastUsedID;
    }
  }
}

// relies on freshness of studentIDs.
export function addStudent(name: string, grades: CourseGrade[] = stryMutAct_9fa48("2000") ? ["Stryker was here"] : (stryCov_9fa48("2000"), [])): StudentID {
  if (stryMutAct_9fa48("2001")) {
    {}
  } else {
    stryCov_9fa48("2001");
    const newID = StudentIDManager.newID();
    const newStudent = stryMutAct_9fa48("2002") ? {} : (stryCov_9fa48("2002"), {
      studentID: newID,
      studentName: name
    });
    allTranscripts.push(stryMutAct_9fa48("2003") ? {} : (stryCov_9fa48("2003"), {
      student: newStudent,
      grades
    }));
    return newID;
  }
}

// gets transcript for given ID.  Returns undefined if missing
export function getTranscript(studentID: number): Transcript | undefined {
  if (stryMutAct_9fa48("2004")) {
    {}
  } else {
    stryCov_9fa48("2004");
    return allTranscripts.find(stryMutAct_9fa48("2005") ? () => undefined : (stryCov_9fa48("2005"), transcript => stryMutAct_9fa48("2008") ? transcript.student.studentID != studentID : stryMutAct_9fa48("2007") ? false : stryMutAct_9fa48("2006") ? true : (stryCov_9fa48("2006", "2007", "2008"), transcript.student.studentID == studentID)));
  }
}

// gets studentIDs matching a given name
export function getStudentIDs(studentName: string): StudentID[] {
  if (stryMutAct_9fa48("2009")) {
    {}
  } else {
    stryCov_9fa48("2009");
    return stryMutAct_9fa48("2010") ? allTranscripts.map(transcript => transcript.student.studentID) : (stryCov_9fa48("2010"), allTranscripts.filter(stryMutAct_9fa48("2011") ? () => undefined : (stryCov_9fa48("2011"), transcript => stryMutAct_9fa48("2014") ? transcript.student.studentName != studentName : stryMutAct_9fa48("2013") ? false : stryMutAct_9fa48("2012") ? true : (stryCov_9fa48("2012", "2013", "2014"), transcript.student.studentName == studentName))).map(stryMutAct_9fa48("2015") ? () => undefined : (stryCov_9fa48("2015"), transcript => transcript.student.studentID)));
  }
}

// deletes student with the given ID from the database.
// throws exception if no such student.  (Is this the best idea?)
export function deleteStudent(studentID: StudentID): void {
  if (stryMutAct_9fa48("2016")) {
    {}
  } else {
    stryCov_9fa48("2016");
    const index = allTranscripts.findIndex(stryMutAct_9fa48("2017") ? () => undefined : (stryCov_9fa48("2017"), t => stryMutAct_9fa48("2020") ? t.student.studentID != studentID : stryMutAct_9fa48("2019") ? false : stryMutAct_9fa48("2018") ? true : (stryCov_9fa48("2018", "2019", "2020"), t.student.studentID == studentID)));
    if (stryMutAct_9fa48("2023") ? index != -1 : stryMutAct_9fa48("2022") ? false : stryMutAct_9fa48("2021") ? true : (stryCov_9fa48("2021", "2022", "2023"), index == (stryMutAct_9fa48("2024") ? +1 : (stryCov_9fa48("2024"), -1)))) {
      if (stryMutAct_9fa48("2025")) {
        {}
      } else {
        stryCov_9fa48("2025");
        throw new Error(stryMutAct_9fa48("2026") ? `` : (stryCov_9fa48("2026"), `no student with ID = ${studentID}`));
      }
    }
    allTranscripts.splice(index, 1);
  }
}
export function addGrade(studentID: StudentID, course: Course, grade: number): void {
  if (stryMutAct_9fa48("2027")) {
    {}
  } else {
    stryCov_9fa48("2027");
    const tIndex = allTranscripts.findIndex(stryMutAct_9fa48("2028") ? () => undefined : (stryCov_9fa48("2028"), t => stryMutAct_9fa48("2031") ? t.student.studentID != studentID : stryMutAct_9fa48("2030") ? false : stryMutAct_9fa48("2029") ? true : (stryCov_9fa48("2029", "2030", "2031"), t.student.studentID == studentID)));
    if (stryMutAct_9fa48("2034") ? tIndex != -1 : stryMutAct_9fa48("2033") ? false : stryMutAct_9fa48("2032") ? true : (stryCov_9fa48("2032", "2033", "2034"), tIndex == (stryMutAct_9fa48("2035") ? +1 : (stryCov_9fa48("2035"), -1)))) {
      if (stryMutAct_9fa48("2036")) {
        {}
      } else {
        stryCov_9fa48("2036");
        throw new Error(stryMutAct_9fa48("2037") ? `` : (stryCov_9fa48("2037"), `no student with ID = ${studentID}`));
      }
    }
    const theTranscript = allTranscripts[tIndex];
    try {
      if (stryMutAct_9fa48("2038")) {
        {}
      } else {
        stryCov_9fa48("2038");
        allTranscripts[tIndex] = addGradeToTranscript(theTranscript, course, grade);
      }
    } catch (e) {
      if (stryMutAct_9fa48("2039")) {
        {}
      } else {
        stryCov_9fa48("2039");
        throw new Error(stryMutAct_9fa48("2040") ? `` : (stryCov_9fa48("2040"), `student ${studentID} already has a grade in course ${course}`));
      }
    }
  }
}

// returns transcript like the original, but with the new grade added.
// throws an error if the course is already on the transcript
function addGradeToTranscript(theTranscript: Transcript, course: Course, grade: number): Transcript {
  if (stryMutAct_9fa48("2041")) {
    {}
  } else {
    stryCov_9fa48("2041");
    const {
      grades
    } = theTranscript;
    if (stryMutAct_9fa48("2044") ? grades.findIndex(entry => entry.course === course) == -1 : stryMutAct_9fa48("2043") ? false : stryMutAct_9fa48("2042") ? true : (stryCov_9fa48("2042", "2043", "2044"), grades.findIndex(stryMutAct_9fa48("2045") ? () => undefined : (stryCov_9fa48("2045"), entry => stryMutAct_9fa48("2048") ? entry.course !== course : stryMutAct_9fa48("2047") ? false : stryMutAct_9fa48("2046") ? true : (stryCov_9fa48("2046", "2047", "2048"), entry.course === course))) != (stryMutAct_9fa48("2049") ? +1 : (stryCov_9fa48("2049"), -1)))) {
      if (stryMutAct_9fa48("2050")) {
        {}
      } else {
        stryCov_9fa48("2050");
        throw new Error();
      }
    }
    return stryMutAct_9fa48("2051") ? {} : (stryCov_9fa48("2051"), {
      student: theTranscript.student,
      grades: grades.concat(stryMutAct_9fa48("2052") ? {} : (stryCov_9fa48("2052"), {
        course,
        grade
      }))
    });
  }
}

//
export function getGrade(studentID: StudentID, course: Course): number {
  if (stryMutAct_9fa48("2053")) {
    {}
  } else {
    stryCov_9fa48("2053");
    const theTranscript = allTranscripts.find(stryMutAct_9fa48("2054") ? () => undefined : (stryCov_9fa48("2054"), t => stryMutAct_9fa48("2057") ? t.student.studentID != studentID : stryMutAct_9fa48("2056") ? false : stryMutAct_9fa48("2055") ? true : (stryCov_9fa48("2055", "2056", "2057"), t.student.studentID == studentID)));
    const theGrade = stryMutAct_9fa48("2058") ? theTranscript.grades.find(g => g.course == course) : (stryCov_9fa48("2058"), theTranscript?.grades.find(stryMutAct_9fa48("2059") ? () => undefined : (stryCov_9fa48("2059"), g => stryMutAct_9fa48("2062") ? g.course != course : stryMutAct_9fa48("2061") ? false : stryMutAct_9fa48("2060") ? true : (stryCov_9fa48("2060", "2061", "2062"), g.course == course))));
    if (stryMutAct_9fa48("2065") ? theGrade !== undefined : stryMutAct_9fa48("2064") ? false : stryMutAct_9fa48("2063") ? true : (stryCov_9fa48("2063", "2064", "2065"), theGrade === undefined)) {
      if (stryMutAct_9fa48("2066")) {
        {}
      } else {
        stryCov_9fa48("2066");
        throw new Error(stryMutAct_9fa48("2067") ? `` : (stryCov_9fa48("2067"), `no grade for student ${studentID} in course ${course}`));
      }
    }
    return theGrade.grade;
  }
}