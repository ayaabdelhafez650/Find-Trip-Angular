export class Trip {
constructor(public tripID:number,public code:string,public priceBefore:number,
    public priceAfter:number,public discound:number,public name:string,
    public origin:string,public destination:string,public  dateTimeStart:Date ,public  dateTimeEnd:Date,
    public tripDescription: string,public featured:boolean,public noOfLikes:number,
     public noOfBookm :number, public rateing:number ,public isRemoved:boolean ,public companyID:number,public hotelID:number ,public categoryID:number,public categoryName:string
     ){}

}
