import experiences from "../data/experiences"
import Card from "./Card"
export default function Main(){
    const cardExperiences = experiences.map(exp =>{
        console.log(exp.image)
        return <Card 
            id={exp.id}
            {...exp}
        />
    })
    return (
        <main className="main">
            {cardExperiences}
        </main>
    )
}