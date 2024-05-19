export interface InnovationPaperBody {
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
  // studentIdCard: File;
  // proofOfUploadingFlyersOnIgStory: File;
  // proofOfUploadingTwibbonOnIgFeed: File;
  // proofOfSharingFlyers: File;
  // originalitySheet: File;
  // abstract: File;
}

export interface StudyCaseBody {
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
  // studentIdCard: File;
  // proofOfUploadingFlyersOnIgStory: File;
  // proofOfUploadingTwibbonOnIgFeed: File;
  // proofOfSharingFlyers: File;
}

export interface PhotographyBody {
  name: string;
  institution: string;
  country: string;
  phoneNumber: string;
  email: string;
  // paymentProof: File;
  // photograph: File;
  // description: File;
}
