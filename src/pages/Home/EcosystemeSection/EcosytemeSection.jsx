import React, { useState } from 'react'
import Button from '../../../components/Buttons/Button.jsx'
//import CLIENTS from '../../../data/clients.js'
import image from '../../../assets/auchan-logo.svg'

/*
DONE: menu
DONE : collapse
DONE : galery logo
todo : logo on background
todo : paragraph
todo : transition entre background
todo : transition au survol
todo: enlever vh, car si fenetre étroite tout s'empile
todo: gérer les différents états: selected, hovered du menu et de la barre de logo
todo: bloquer la premiere sélection au chargement
DONE: bouton
*/

/*
- quand je survole on bouton du menu un évantail des clients apparait
  - add event listener sur chaque bouton,
  - au survol, il rempli le container avec un affichage par défaut
- quand je survole les elmts du container:
    - add event listener dans chaque elmt
    - interaction: le fond de page est le logo
    - interaction: le logo devient coloré et grossi
    - interaction: le titre du paragraphe change
    - interaction: l'affichage du paragraphe s'aligne au logo
*/


const EcosystemeSection = ({data}) => {
  const [currentKey, setCurrentKey] = useState(Object.keys(data)[0]);

  const [currentLogo, setCurrentLogo] = useState(data[Object.keys(data)[0]][0].logoOnline)

  //console.log("PROPS", Object.keys(data)[0]);
  console.log("clients" , data["Grande distribution"][0]);

  const handleButtonHover = (event) => {
    const hoveredKey = event.currentTarget.dataset.key;
    setCurrentKey(hoveredKey)
    //console.log("test", event.currentTarget.dataset.key); //presse
    //const h3Content = document.querySelector(`#${currentKey} h3`);
    //console.log("h3Content", h3Content);
    // Le reste du code...
  };
  const handleLogoHover = (event) =>{
    console.log("EVENT logo hover", event);
    displayDetailsLogo(event)
    

  }
  const displayDetailsP = (event) =>{
    console.log("event :", event);
    //console.log("event2 :", event.target.dataset.logo);

    const hoveredLogo = event.target.currentSrc // pas fiable, trouvé un autre moyen
    setCurrentLogo(hoveredLogo)
    console.log("hoveredLogo", hoveredLogo);

    // affiche texte
    // affiche fond coloré

    //bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_E.Leclerc_Sans_le_texte.svg')]
  }
  const displayDetailsLogo = (event) =>{
    console.log("event :", event);
    console.log("event2 :", event.target.dataset.logo);

    const hoveredLogo = event.target.currentSrc // pas fiable, trouvé un autre moyen
    setCurrentLogo(event.target.dataset.logo)

    // affiche texte
    // affiche fond coloré

    //bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_E.Leclerc_Sans_le_texte.svg')]
  }

console.log("currentLOGO", currentLogo);
  return (
    <section className=" h-screen text-dark-blue  bg-white/80 relative" id="ecosystemeSection"  >
      <div style={{ backgroundImage: `url('${currentLogo}')` }} className={`background-giant-logo bg-cover -z-50 blur-3xl bg-center bg-no-repeat absolute w-full h-full `}></div>
      <h2 className="text-5xl text-center pt-[12rem] w-[38.1875rem] m-auto"> L'information au service d'un écosystème engagé</h2>
      <p className="text-center pt-[4vh]">Ils nous font confiance</p>


      <div id="ecosystemeSectionContents" className="flex flex-col items-center content-center w-3/5 m-auto pt-[8vh]">
        {/* contenur d'infos: des boutons de titre, évantails de partenaire et détails collapsed */}
        {/* menu */}
        <div id="ecosystemeSectionMenu" className='flex justify-center relative'>
          <div className='line absolute bottom-0 border-b border-dark-blue/40 w-[100vw] max-w-screen-3xl'></div>
            {Object.keys(data).map((el,index)=>{
              return(
                // <div key={index}>
                <button key={index} className="group is-test relative peer" data-key={el} onMouseEnter={handleButtonHover}>
                  <h3  className='min-w-72 pb-[1rem]'>{el}
                    <div className="line-bold absolute bottom-[0px] border-b border-dark-blue w-full transform scale-0 group-hover:scale-100 transition-all duration-300 origin-left">
                    </div>
                  </h3>
                </button>
              )}
            )}
        </div>
                    
        {/* éventail des clients 
                    left-[calc(50%-${CLIENTS[el].length*3}rem)]*/}
                    <div className="flex peer-[.is-test]:peer-hover:flex items-center place-content-center flex-wrap pt-[4.5vh] divide-x-[1px]  max-w-[54rem] "> 
          
                      {data[currentKey].map((elmt, index)=>{
                        return(
                          <div key={index} className='hoveredActions relative group is-test2 px-[1.5rem] py-[0.25rem]' data-logo={elmt.logoOnline} onMouseEnter={handleLogoHover}>
                            
                            <img className="w-[2rem] grayscale opacity-80 group-hover:w-[3rem] group-hover:grayscale-0 group-hover:opacity-100"src={elmt.logoOnline}/>
                            
                            <div className="hidden pt-[5.5vh] absolute group-hover:flex w-64 ">
                                <p> <span className="span-text--bold">{elmt.name} </span>utilise OpenClimat pour échanger avec ses fournisseurs sur le sujet climat et suivre leurs avancements ljklj </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
        {/* paragraphe descriptif */}
                    

                  
              
            



        


      </div>
      {/* fin du contenu d'information */}


      <div className="flex justify-center pt-[24vh]">
      <Button>Je découvre les solutions partenaires</Button>
      </div>





        {/* autre test */}
        






    </section>
  )
}

export default EcosystemeSection