import React from 'react'
import Button from '../../../components/Buttons/Button'
import MenuSection from '../../../components/MenuSection/MenuSection'
/*
todo : menu
todo : collapse
todo : galery logo
todo : logo on background
todo : paragraph
todo : collapse
todo : transition entre background
todo : animation au survol
todo : bouton
*/
const CLIENTS = {
    "Grande distribution": {}, 
    "Presse":{},
    "ONG":{}
}

const EcosystemeSection = () => {
  return (
    <section className="bg-bg-light-pink h-screen text-dark-blue " id="ecosystemeSection">
      <h2 className="text-5xl text-center pt-[9.375rem] w-[38.1875rem] m-auto"> L'information au service d'un écosystème engagé</h2>
      <p className="text-center pt-[4vh]">Ils nous font confiance</p>
      <div id="ecosystemeSectionContents">
        <MenuSection clients={Object.keys(CLIENTS)}></MenuSection>

        {/* <div id="ecosystemeSectionMenu">
          <div className='flex justify-center pt-[4vh] gap-20'> 
            <h3>Menu1</h3> 
            <h3>Menu2</h3>
            <h3>Menu3</h3>
          </div>
          <div className='flex justify-center'>_________ __________ ____________</div>
        </div> */}

        <div className='flex justify-center pt-[4vh] gap-6'>
          <div> logo1 </div>
          <div> logo2 </div>
          <div> logo3 </div>
          <div> logo4 </div>
        </div>

        <div className='flex justify-center pt-[4vh] gap-6'>
          <div> logo1 utilise OpenClimat pour échanger avec ses fournisseurs sur le sujet climat et suivre leurs avancements </div>
          <div> text logo2 </div>
          <div> text logo3 </div>
          <div> text logo4 </div>
        </div>





      </div>
      <div className="flex justify-center pt-[8vh]">
      <Button>Je découvre les solutions partenaires</Button>
      </div>
    </section>
  )
}

export default EcosystemeSection