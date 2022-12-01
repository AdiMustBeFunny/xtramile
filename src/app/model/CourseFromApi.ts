export interface CourseFromApi{
Project: string,
ProjectId:string
Course:string
CourseId:string
Person:string
Email:string
Upn:string
Department:string
Location:string
ImportTag:string
CourseStartedDate:string,
OpenedLessonsCount:number,
CompletedDate:string,
CompletedLessonsCount:number,
TotalLessonsCount:number,
HaveNotStarted:number,
NotOnSchedule:number,
HaveStarted:number,
QuizScore:number,
QuizScoreTotal:number,
CertificateTitle:string | undefined,
Mobile:string | undefined,
IsPassed:boolean
}