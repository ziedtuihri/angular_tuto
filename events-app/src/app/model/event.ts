export class Event {
    public title: string;
    public startDate: string;
    public endDate: string;
    public description: string;
    public ownerName: string; 
    public image: string;

    constructor(title:string,
                startDate:string,
                endDate:string,
                description?:string,
                ownerName?:string,
                image?: string){
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.ownerName = ownerName;
        this.image = image;
    }

    getTitle(): string{
        return this.title;
    }

    getStartDate(): string{
        return this.startDate;
    }

    getEndDate(): string{
        return this.endDate;
    }

    getDescription(): string{
        return this.description;
    }

    getOwnerName(): string{
        return this.ownerName;
    }

    setTitle(title:string){
        this.title = title;
    }

    setStartDate(startDate:string){
        this.startDate = startDate;
    }

    setEndDate(endDate:string){
        this.endDate = endDate;
    }

    setDescription(description:string){
        this.description = description;
    }

    setOwnerName(ownerName:string){
        this.ownerName = ownerName;
    }


}