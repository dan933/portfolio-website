import { RouterLink } from "@angular/router"

interface ICard {
  title:string,
  subtitle:string,
  img: string,
  caption: string
  routeLink:string
}

export const cardData: ICard[] = [
  {
    title:"Invoice App",
    subtitle:"Stack: Angular, Sql Server and Entity Framework",
    img: "../../assets/Images/fullstack/invoice-application/fullstack.png",
    caption: "An Invoice application that allows the user to create customers and invoices. The invoices can be downloaded as a pdf and can be marked as paid.",
    routeLink:"/fullstack"
  },
  {
    title:"RideShare App",
    subtitle:"Stack: R, Shiny and Leaflet",
    img: "../../assets/Images/overview-images/rideshare Project.jpg",
    caption: "A shiny app used to identify profitable areas and times for rideshare drivers. This app was A shiny app used to identify profitable areas and times for made with the R programming language and leaflet.",
    routeLink:"/r-projects"
  },
  {
    title:"Picture Filter",
    subtitle:"Stack: C",
    img: "../../assets/Images/overview-images/C-example-sepia.jpg",
    caption: "A C application that takes a photo and adds a filter to the picture.",
    routeLink:"/c-projects"
  },
  {
    title:"Access Invoice relational database",
    subtitle:"Stack: MS Access",
    img: "../../assets/Images/overview-images/Access Example.jpg",
    caption: "A Microsoft Access application to manage a companies invoice.",
    routeLink:"/sql-projects"
  },
  {
    title:"DNA Match",
    subtitle:"Stack: Python",
    img: "../../assets/Images/overview-images/DNA Example.png",
    caption: "A python program that returns the name of a person when there is a DNA match.",
    routeLink:"/python-projects"
  },
]
