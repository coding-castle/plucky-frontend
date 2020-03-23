import { Component, OnInit } from "@angular/core";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-wiki",
  templateUrl: "./wiki.component.html",
  styleUrls: ["./wiki.component.scss"]
})
export class WikiComponent implements OnInit {
  public chevronUp = faChevronUp;
  public chevronDown = faChevronDown;
  public plucky = true;
  public collapsed = true;
  public items = [
    // {
    //   collapseState: true,
    //   image: "https://picsum.photos/300/300",
    //   title: "How-To: Spargelstechen",
    //   preBody:
    //     "Spargelstechen ist leider sehr mühsam und muss von Hand erledigt werden. Weißspargel und Grünspargel unterscheiden sich hier in der Vorgehensweise. ",
    //   body:
    //     "Grünspargel: wird über dem Boden abgeschnitten Weißspargel:<p>-Zur Ernte bekommst du ein Spargelmesser, eine Spargelkelle, Handschuhe und einen Erntekorb mit Abdeckung zur Verfügung gestellt. -Spargel wird unter einem sogenannten Erdwall angepflanzt. -Eine erntereife Spargelstange erkennt man an Rissen an der Oberseite des Erdwalls. -Mit gespreizten Fingern geht man an der Stange entlang, und legt sie frei. -Die Stange wird abgeschnitten, in den Korb gelegt und abgedeckt. -Das entstandene Loch muss mit der Spargelkelle sofort wieder mit Erde aufgefüllt und festgeklopft werden. Eine glatte Fläche wird benötigt um zu erkennen, dass eine neue Stange reift. Allgemeine Infos: -Spargel ist eine mehrjährige Pflanze. Das heißt, die Erntemenge variiert unter den Jahren. -Oft wird Spargel unter einer dunklen Folie angebaut. Dadurch wird Sonnenwärme gespeichert und der Boden erwärmt. Der Spargel wächst dadurch schneller. -Bei warmen Temperaturen sprießt Spargel sehr schnell, sodass oft zweimal am Tag gestochen wird. -Die Spargelsaison beginnt in der zweiten Aprilhälfte und geht bis zum 24. Juni. Ab dann hat die Pflanze wieder Zeit sich zu erholen."
    // },
    {
      collapseState: true,
      image: "https://picsum.photos/300/300",
      title: "Good-to-Know: Unterkunft als Saisonarbeiter",
      preBody:
        "Saisonarbeiter oder Erntehelfer kommen oft nicht aus der Region. Solltest du aus der Region kommen, kannst du natürlich bei dir zuhause wohnen. Wenn du nicht aus der Nähe kommst, werden oft Unterkünfte von den Höfen gestellt. Diese variieren in der Ausstattung und im Komfort. Es können Container mit Mehrbettzimmern sein oder ganze Ferienwohnungen.",
      body:
        "Saisonarbeiter zahlen für eine solche Wohnung in der Regel zwischen 3 und 10 Euro am Tag. Verpflegung ist manchmal inklusive, manchmal auch nicht. Gern könnt ihr euren Wunscharbeitgeber auf die Möglichkeiten zur Unterkunft ansprechen. Oft sind Bauern gut vernetzt und können euch auch helfen eine Wohnung oder ein Zimmer in der Gegend zu organisieren."
    },
    {
      collapseState: true,
      image: "https://picsum.photos/300/300",
      title: "Good-to-Know: Gehalt als Saisonarbeiter",
      preBody:
        "Finanziell reich wird man als Erntehelfer nicht. Trotzdem sollte man die Arbeit nicht gleich abtun, denn: hier hat man die Möglichkeit über Wochen oder Monate konstant zu Arbeiten.",
      body:
        "Außerdem lernt man sehr viel über die Landwirtschaft, ist draußen an der frischen Luft und in der Sonne und betätigt sich körperlich. Manche nennendie Tätigkeit als Erntehelfer auch das einzige Fitnessstudio, für das man bezahlt wird. Das Gehalt variiert meist zwischen Mindestlohn (9,35€ pro Stunde) und 11 Euro pro Stunde."
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
