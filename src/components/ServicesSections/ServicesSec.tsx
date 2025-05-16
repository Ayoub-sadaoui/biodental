import Image from "next/image";

const ServicesSec = () => {
  return (
    <section className="max-w-[1000px] mx-auto bg-transparent py-16 flex flex-col items-center">
      <h2 className="text-[2.5rem] md:text-[2.8rem] font-bold font-playfair-important text-[#243520] mb-8 text-center">
        Nos services complets ..
      </h2>
      <div className=" rounded-xl border-[3px] border-[#F7F7F5] max-w-[95vw] w-full flex flex-col md:flex-row p-2  md:p-8 gap-8 shadow-md">
        <div className="flex-1 flex justify-center items-center min-w-[320px]">
          <Image
            src="/services/services1.png"
            alt="Préservation des dents"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full h-[320px] md:h-[370px] max-w-full"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="flex-1  px-2 md:px-8  ">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#243520] mb-5">
            1. Préservation des dents
          </h3>
          <p className="text-base md:text-lg text-[#F7F7F5] font-normal leading-relaxed">
            Chez BioDental, notre approche de la préservation dentaire met
            l'accent sur le maintien de la santé et de la fonctionnalité de vos
            dents naturelles. Nous employons des mesures préventives et des
            traitements conservateurs, tels que les obturations, les inlays, les
            scellements et les traitements au fluor, en utilisant des matériaux
            biocompatibles pour assurer la longévité de vos dents et vous éviter
            des extractions inutiles.
          </p>
        </div>
      </div>
      <div className=" rounded-xl mt-16 border-[3px] border-[#F7F7F5] max-w-[95vw] w-full flex flex-col md:flex-row p-2  md:p-8 gap-8 shadow-md">
        <div className="flex-1  px-2 md:px-8  ">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#243520] mb-5">
            2. Implants dentaires
          </h3>
          <p className="text-base md:text-lg text-[#F7F7F5] font-normal leading-relaxed">
            Les implants dentaires offrent une solution durable et esthétique
            pour remplacer les dents manquantes. Chez BioDental, nous utilisons
            des techniques d'imagerie et chirurgicales avancées pour placer des
            piliers en titane ou en zircone qui servent de racines dentaires
            artificielles. Ces implants fournissent une base stable pour les
            couronnes, les bridges ou les prothèses, restaurant à la fois la
            fonction et l'apparence. Nos plans de traitement personnalisés
            garantissent que chaque implant s'intègre parfaitement à vos dents
            naturelles, favorisant une santé bucco-dentaire à long terme.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center min-w-[320px]">
          <Image
            src="/services/services2.png"
            alt="Préservation des dents"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full h-[320px] md:h-[370px] max-w-full"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
      <div className=" rounded-xl  mt-16 border-[3px] border-[#F7F7F5] max-w-[95vw] w-full flex flex-col md:flex-row p-2  md:p-8 gap-8 shadow-md h-fit min-h-[360px]">
        <div className="flex-1 flex justify-center items-center min-w-[320px]">
          <Image
            src="/services/services3.png"
            alt="Préservation des dents"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full h-full  max-w-full"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="flex-1 ">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#243520] mb-5">
            3. Prothèses dentaires fixes
          </h3>
          <p className="text-base md:text-lg text-[#F7F7F5] font-normal leading-relaxed">
            Nos prothèses dentaires fixes, y compris les couronnes et les
            bridges, sont conçues pour restaurer la solidité et l'apparence des
            dents endommagées ou manquantes. Fabriquées à partir de matériaux de
            haute qualité comme la céramique et la zircone, ces restaurations
            sont solidement fixées aux dents existantes ou aux implants. Elles
            améliorent non seulement l'esthétique de votre sourire, mais aussi
            l'efficacité de la mastication et la clarté de l'élocution. Chez
            BioDental, nous veillons à ce que chaque prothèse soit adaptée à
            votre dentition naturelle, offrant une solution durable et homogène.
          </p>
        </div>
      </div>
      <div className=" rounded-xl mt-16 border-[3px] border-[#F7F7F5] max-w-[95vw] w-full flex flex-col md:flex-row p-2  md:p-8 gap-8 shadow-md">
        <div className="flex-1  px-2 md:pl-0 md:pr-0  ">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#243520] mb-5 ">
            4.Chirurgie orale et pathologie  
        </h3>
          <p className="text-base md:text-[16px] text-[#F7F7F5] font-normal leading-relaxed">
            BioDental offre des services complets de chirurgie et de pathologie
            buccales pour traiter les affections dentaires complexes. Notre
            équipe expérimentée réalise des interventions telles que les
            extractions, les biopsies et les chirurgies mineures de la mâchoire
            avec précision et soin. Nous sommes également spécialisés dans le
            diagnostic et la gestion des maladies buccales, assurant une
            détection précoce et un traitement efficace. Utilisant des
            équipements et des techniques de pointe, nous accordons la priorité
            à la sécurité et au confort du patient tout au long du processus
            chirurgical.
          </p>
        </div>
        <div className="flex-1 flex justify-start items-center min-w-[320px]">
          <Image
            src="/services/services4.png"
            alt="Préservation des dents"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full h-[320px] md:h-[370px] max-w-full"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
      <div className=" rounded-xl  mt-16 border-[3px] border-[#F7F7F5] max-w-[95vw] w-full flex flex-col md:flex-row p-2  md:p-8 gap-13 shadow-md">
        <div className="flex-1 flex justify-center items-center h-full min-w-[320px]">
          <Image
            src="/services/services5.png"
            alt="Préservation des dents"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full  md:h-[370px] max-w-full"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="flex-1 ">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#243520] mb-5">
            5. ODF orthodontique
          </h3>
          <p className="text-base md:text-lg text-[#F7F7F5] font-normal leading-relaxed space-y-1">
           Nos services d'orthodontie visent à corriger les malocclusions dentaires et des mâchoires, améliorant ainsi la fonction et l'apparence. Nous proposons diverses options de traitement, y compris les broches traditionnelles et les aligneurs transparents, adaptées aux besoins uniques de chaque patient. En traitant les problèmes tels que l'encombrement, l'espacement et les irrégularités de l'occlusion, nous aidons les patients à obtenir un sourire harmonieux et confiant. L'intervention précoce et les plans de soins personnalisés sont des éléments clés de notre approche orthodontique
          </p>
        </div>
      </div>
      <div className=" rounded-xl mt-16 border-[3px] border-[#F7F7F5] max-w-[95vw] w-full flex flex-col md:flex-row p-2  md:p-8 gap-8 shadow-md">
        <div className="flex-1  px-2 md:px-8  ">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#243520] mb-5">
            6. Denisterie esthétique
          </h3>
          <p className="text-base md:text-lg text-[#F7F7F5] font-normal leading-relaxed">
            Chez BioDental, nos soins esthétiques subliment votre sourire :
            blanchiment, facettes, collage, remodelage gingival... Nous allions
            art et expertise pour des résultats magnifiques et naturels. Un plan
            personnalisé pour vos objectifs et votre santé bucco-dentaire.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center min-w-[320px]">
          <Image
            src="/services/services6.png"
            alt="Préservation des dents"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full h-[320px] md:h-[370px] max-w-full"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
export default ServicesSec