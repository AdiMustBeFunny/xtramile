export class PersonProject{
    Project:string
    ProjectId:string
    OpenedLessonsCount:number
    CompletedLessonsCount:number
    TotalLessonsCount:number
    constructor(
        project:string,
        projectId:string,
        openedLessonsCount:number,
        completedLessonsCount:number,
        totalLessonsCount:number){
            this.Project = project
            this.ProjectId = projectId
            this.OpenedLessonsCount = openedLessonsCount
            this.CompletedLessonsCount = completedLessonsCount
            this.TotalLessonsCount = totalLessonsCount
    }
}