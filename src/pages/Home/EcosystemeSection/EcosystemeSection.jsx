import React from 'react'
import Button from '../../../components/Buttons/Button'
import MenuSection from '../../../components/MenuSection/MenuSection'
/*
todo : menu
todo : collapse
DONE : galery logo
todo : logo on background
todo : paragraph
todo : collapse
todo : transition entre background
todo : animation au survol
todo : bouton
*/
const CLIENTS = {
    "Grande distribution":  [
      {
        "name": "Leclerc",
        "id":"001",
        "logo":"leclerc-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_E.Leclerc_Sans_le_texte.svg"
      },
      {
        "name": "Auchan",
        "id":"002",
        "logo":"auchan-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
      },
      
      {
        "name": "Auchan",
        "id":"003",
        "logo":"auchan-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
      },
      {
        "name": "Auchan",
        "id":"004",
        "logo":"auchan-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
      },
      {
        "name": "Auchan",
        "id":"005",
        "logo":"auchan-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
      },
      {
        "name": "Auchan",
        "id":"006",
        "logo":"auchan-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
      },
      {
        "name": "Auchan",
        "id":"007",
        "logo":"auchan-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
      }
  ], 
    "Presse":[{
        "name": "LSA",
        "id":"008",
        "logo":"lsa-logo.png",
        "logoOnline":"https://ingoodwetrust.com/wp-content/uploads/2017/08/Logo-LSA.png"  
    },
    {
      "name": "Auchan",
      "id":"011",
      "logo":"auchan-logo.svg",
      "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
    }],
    "ONG":[{
        "name": "Greenpeace",
        "id":"009",
        "logo":"greenpeace-logo.png",
        "logoOnline":"https://cdn.icon-icons.com/icons2/2699/PNG/512/greenpeace_logo_icon_169063.png" 
      },
      {
        "name": "Auchan",
        "id":"010",
        "logo":"auchan-logo.svg",
        "logoOnline":"https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" 
      }
  ]
}

const EcosystemeSection = () => {
  console.log("clients" , CLIENTS["Grande distribution"]); 


  return (
    <section className="bg-white/40 h-screen text-dark-blue " id="ecosystemeSection">
      <h2 className="text-5xl text-center pt-[9.375rem] w-[38.1875rem] m-auto"> L'information au service d'un écosystème engagé</h2>
      <p className="text-center pt-[4vh]">Ils nous font confiance</p>


      <div id="ecosystemeSectionContents">
        {/* <MenuSection clients={Object.keys(CLIENTS)}></MenuSection> 
        OK - quand je survole on bouton du menu un évantail des clients apparait
        - le premier index de cet évantail est sélectionné par défaut
        - quand je survole l'évantail, ma sélection change de marque
        - quand je change de marque, la couleur du fonc change
        - quand je change de marque  un texte descriptif apparait
        */}
        <div id="ecosystemeSectionMenu" className='flex justify-center pt-[8vh] border-b border-dark-blue/40 relative'>
          <div className='absolute top-[calc(8vh+24px+1rem)] border-b border-dark-blue/40 w-full'></div>
            {Object.keys(CLIENTS).map((el,index)=>{
              //console.log("length", CLIENTS[el].length );
              //let long = `${CLIENTS[el].length*3}rem` 
              //console.log("long", long);
              return(
                <div >
                  <button key={index} className="peer is-test relative">
                    <h3  className='min-w-72 pb-[1rem] relative group'>{el}
                      <div className="absolute bottom-[-1px] border-b border-dark-blue w-full z-40 transform scale-0 group-hover:scale-100 transition-all duration-300 origin-left">
                      </div>
                    </h3>
                  </button>
                  <div className={`hidden peer-[.is-test]:peer-hover:flex justify-center pt-[4vh] divide-x-[1px] max-w-[54rem] absolute bottom-[-11vh] left-[calc(50%-${CLIENTS[el].length*3}rem)]`} > 
                    {/* <div className=`hidden peer-[.is-test]:peer-hover:flex justify-center pt-[4vh] divide-x-[1px] max-w-[54rem] bg-red absolute bottom-[-12vh] right-[calc(50%-${CLIENTS[el]}.length *63px)]` >  */}
                      {/* {CLIENTS[`${el}`].map((elmt, index)=>{ */}
                      {CLIENTS[el].map((elmt, index)=>{
                        //console.log("ELMT", elmt);
                        return(
                          <div key={index} className=" px-[1.5rem] flex items-center">
                            <img className="w-[3rem]"src={elmt.logoOnline}/>
                          </div>
                        )
                      })}
                    </div>
                  
                </div>
              )}
            )}
          </div>

        {/* <div className='flex justify-center pt-[4vh] divide-x-[1px]'> */}
          {/* si button key=0 est hover, alors, list de key0 se display */}
          {/* <div className="w-20 h-20">
            <img src={CLIENTS["Grande distribution"][0].logoOnline}/>
          </div> */}
          {/* {CLIENTS["Grande distribution"].map((el, index)=>{
            //console.log("El", el.logoOnline);
            return(
              <div key={index} className="w-25 h-20 px-[1.5rem] flex ">
                <img src={el.logoOnline}/>
              </div>

            )
          })}
        </div> */}






      </div>
      <div className="flex justify-center pt-[24vh]">
      <Button>Je découvre les solutions partenaires</Button>
      </div>
    </section>
  )
}

export default EcosystemeSection