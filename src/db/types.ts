import {
  Generated,
  Insertable,
  Selectable,
} from 'kysely'

export interface InnovationPaperTable {
  id: Generated<number>;
  teamName: string;
  subTheme: 'SDGs' | 'Maritime' | 'Infrastructure' | 'Settlement' | 'Economy';
  institution: string;
  country: string;
  teamLeaderName: string;
  teamLeaderMajor: string;
  teamLeaderPhoneNumber: string;
  teamLeaderEmail: string;
  firstMemberName: string;
  firstMemberMajor: string;
  secondMemberName: string;
  secondMemberMajor: string;
  studentIdCard: string; // Assuming a file path or URL
  proofOfUploadingFlyersOnIgStory: string; // Assuming a file path or URL
  proofOfUploadingTwibbonOnIgFeed: string; // Assuming a file path or URL
  proofOfSharingFlyers: string; // Assuming a file path or URL
  originalitySheet: string; // Assuming a file path or URL
  abstract: string; // Assuming a file path or URL
}

export type InnovationPaper = Selectable<InnovationPaperTable>
export type NewInnovationPaper = Insertable<InnovationPaperTable>

export interface StudyCaseTable {
  id: Generated<number>;
  teamName: string;
  institution: string;
  country: string;
  teamLeaderName: string;
  teamLeaderMajor: string;
  teamLeaderPhoneNumber: string;
  teamLeaderEmail: string;
  firstMemberName: string;
  firstMemberMajor: string;
  secondMemberName: string;
  secondMemberMajor: string;
  studentIdCard: string; // Assuming a file path or URL
  proofOfUploadingFlyersOnIgStory: string; // Assuming a file path or URL
  proofOfUploadingTwibbonOnIgFeed: string; // Assuming a file path or URL
  proofOfSharingFlyers: string; // Assuming a file path or URL
}

export type StudyCase = Selectable<StudyCaseTable>
export type NewStudyCase = Insertable<StudyCaseTable>

export interface PhotographyTable {
  id: Generated<number>;
  name: string;
  institution: string;
  country: string;
  phoneNumber: string;
  email: string;
  paymentProof: string; // Assuming a file path or URL
  photograph: string; // Assuming a file path or URL
  description: string; // Assuming a file path or URL
}

export type Photography = Selectable<PhotographyTable>
export type NewPhotography = Insertable<PhotographyTable>

export interface Database {
  InnovationPaper: InnovationPaperTable;
  StudyCase: StudyCaseTable;
  Photography: PhotographyTable;
}