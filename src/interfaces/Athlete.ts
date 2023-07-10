export namespace Athlete {
  export interface AthleteResponse {
    data: AthleteMeta[]
  }

  export interface AthleteMeta {
    name: string;
    sport: string;
    grad_year: number;
    birthday: string;
    email: string;
    url: string;
    club: {
      name: string;
    };
    high_school: {
      name: string;
    };
    gpa: number;
    major: string;
    profile_image: string;
    report: Report[];
  }

  interface Report {
    school: string;
    division: string;
    conference: string;
    ranking: number;
    gpa: {
      min: number;
      '25%': number;
      '50%': number;
      '75%': number;
      max: number;
    };
    sat: {
      reading: {
        min: number | string;
        max: number | string;
      };
      math: {
        min: number | string;
        max: number | string;
      };
    };
    act: {
      min: number | string;
      max: number | string;
    };
  }

}
