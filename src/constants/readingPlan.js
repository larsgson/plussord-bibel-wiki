import { rangeArray } from '../utils/obj-functions'

const plussOrdPlaylist = {
  fileList: [
    {
      id: 0,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=u0KnZLNhw4Y",
      descr:
        'Håp og liv er tema hos Egil Svartdahl i denne ukens Plussord.\n#Plussord "EgilSvartdahl "håp',
      title: "Håp",
    },
    {
      id: 1,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=KdvUekagbUI",
      descr:
        "Reisen hjem til Gud er tema for denne ukens Plussord med Egil Svartdahl.\n#Plussord #EgilSvartdahl #reisenhjem",
      title: "Reisen hjem",
    },
    {
      id: 2,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=PNucYXSnjbo",
      descr:
        "Hvor mye er et menneske verdt? Hvor mye tror du at du er verdt? Denne uken har Egil snakket rundt temaet VERDI!\n#Plussord #EgilSvartdahl #verdi",
      title: "Verdi",
    },
    {
      id: 3,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=EuG3PdNRMSo",
      title: "Nåde",
      descr:
        "Dagens Plussord med Egil Svartdahl om Nåde. Gud gjør ingen forskjell på folk - ufortjent og av hans nåde går vi fri!\n#Plussord #EgilSvartdahl #nåde",
    },
    {
      id: 4,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=ghCoKfPlFrI",
      descr:
        "Denne ukens tema i Plussord  med Egil Svartdahl er ANNERLEDESKONGEN. Jesus var en konge annerledes enn de vi vanligvis ser.\n#Plussord #EgilSvartdahl #Jesus",
      title: "En annerledes konge",
    },
    {
      id: 5,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=OJQQe42C0vg",
      descr:
        "Egil Svartdahl snakker om vismennene i denne ukens Plussord.\n#Plussord #EgilSvartdahl #vismennene",
      title: "Vismennene",
    },
    {
      id: 6,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=-jTspbHf-Vg",
      descr:
        "Egil Svartdahl i Plussord om gjeterne.\n#Plussord #EgilSvartdahl #gjetere",
      title: "Gjeterne",
    },
    {
      id: 7,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=ZtVK5TPxsfw",
      title: "Maria",
      descr:
        "Denne uka snakker Egil Svartdahl om Maria i Plussord.\n#Plussord #EgilSvartdahl #Maria",
    },
    {
      id: 8,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=M7n8UWgm3P4",
      descr:
        "Den store gaven er tema hos Egil Svartdahl i Plussord denne uken. Den store gaven, Jesus Kristus\n#Plussord #EgilSvartdahl #jul",
      title: "Jul",
    },
    {
      id: 9,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=aurakmPQvgU",
      descr:
        "Plussord med Egil Svartdahl om det nye året. La oss gå inn i det nye året med frimodighet og tro på at Gud er med oss alle dager, hele året!\n#Plussord #EgilSvartdahl #Gud",
      title: "Det nye året",
    },
    {
      id: 10,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=4nxNH5Jj7j8",
      descr:
        "Guds tilgivelse er ikke noe vi fortjener, men som vi får ufortjent!.  Plussord med Egil Svartdahl om tilgivelse.\n#Plussord #EgilSvartdahl #tilgivelse",
      title: "Tilgivelse",
    },
    {
      id: 11,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=jlgy1jC3tCk",
      title: "Hjemlengsel",
      descr:
        "Denne ukens tema i Plussord med Egil Svartdahl er HJEMLENGSEL. Gud vil flytte inn i vårt hjerte og gjøre det til vårt hjem!\n#Plussord #EgilSvartdahl #hjemlengsel",
    },
    {
      id: 12,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=sAu-KGI3pZQ",
      descr:
        "Denne ukens tema i Plussord er Hvilemodus. Gud legger til rette for at vi skal få hvile, selv i perioder der mye virker tungt og strevsomt.\n#Plussord #EgilSvartdahl #hvile",
      title: "Å være i hvilemodus",
    },
    {
      id: 13,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=42qnKaNCyVg",
      title: "Vennskap",
      descr:
        "Denne ukens tema i Plussord er vennskap. For at vi mennesker skal ha det bra er gode vennskap viktig!\n#Plussord #EgilSvartdahl #vennskap",
    },
    {
      id: 14,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=kAxSMBLQW28",
      title: "Lykke",
      descr:
        "Plussord med Egil Svartdahl om lykke. Mange jager etter lykke og det kan i mange tilfeller være både slitsomt og stressende. La Gud hjelpe oss å være takknemlige og lykkelige i situasjonen vi står i.\n#Plussord #EgilSvartdahl #lykke",
    },
    {
      id: 15,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=IDblmnvv70I",
      title: "Identitet",
      descr:
        "Identiet er tema i Plussord denne uken. Hva føler vi om oss selv? Hvem er vi? Og hvem lar vi definere hvem vi er? Andakt med Egil Svartdahl\n#Plussord #EgilSvartdahl #identitet",
    },
    {
      id: 16,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=WWz1tZM6_9Y",
      title: "Sjenerøsitet",
      descr:
        "Tema i denne ukens @plussord er SJENERØSITET. Egil Svartdahl snakker om det åbli flinkere til å være sjenerøse med de rundt oss og være tilstede for de som trenger oss.\n#Plussord #EgilSvartdahl #sjenerøs",
    },
    {
      id: 17,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=BFnVUT96VQU",
      title: "Å være elsket",
      descr:
        "Egil Svardahl i Plussord om å være  ELSKET. Vi er alle elsket og uerstattelige for Gud!\n#Plussord #EgilSvartdahl #elsketavgud",
    },
    {
      id: 18,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=PDdgEpCC1T4",
      title: "Se og bli sett",
      descr:
        "Å bli sett gir oss en følelse av å være verdt noe og bety noe for noen.  Dette er tema for denne ukens Plussord med Egil Svartdahl.\n#Plussord #EgilSvartdahl #verdifull",
    },
    {
      id: 19,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=e4wh9ynRQ3Q",
      descr:
        "Tema i denne ukens Plussord er SÅRBARHET. Vi må akseptere vår sårbarhet for å klare å våge å ha nærhet med Gud og de rundt oss! Plussord med Egil Svartdahl\n#Plussord #EgilSvartdahl #sårbar",
      title: "Sårbarhet",
    },
    {
      id: 20,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=ZbTNDcMsBqA",
      title: "Selvopptatthet",
      descr:
        "I denne ukens Plussord snakker Egil Svartdahl om selvopptatthet. Er vi for selvopptatte til å la Gud få plass i livene våre? Vi trenger Gud i livene våre og må derfor gi plass til Han.\n#Plussord #EgilSvartdahl #selvopptatt",
    },
    {
      id: 21,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=LM9cz10UPUE",
      descr:
        "De siste månedene har det skjedd mye i landet vårt som vi ikke har kontroll på! Midt oppi dette er det viktig at vi klarer å holde oss selv i sjakk og beholde en indre fred! Denne ukens @plussord er SJELEFRED og vi håper dette er med på å gjøre dagene dine bedre.  Egil Svartdahl snakker om sjelefred i denne ukens Plussord.\n#Plussord #EgilSvartdahl #sjelefred",
      title: "Sjelefred",
    },
    {
      id: 22,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=q9EXf1RZUrA",
      title: "Lidenskap",
      descr:
        "Lidenskap gjør det umulige mulig hevder Egil Svardahl i Plussord.\n#Plussord #EgilSvartdahl #lidenskap",
    },
    {
      id: 23,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=r-BQdSKG9fM",
      title: "Påske",
      descr:
        "Denne ukens tema er PÅSKE. Egil Svardahl tar for seg det som skjedde i påsken, dag for dag.\n#Plussord  #påske #Jesus",
    },
    {
      id: 24,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=oM4ec9_mCb4",
      descr:
        "I denne uken tar Egil Svartdahl for seg vi Tomas og hans ambivalente forhold til tro og tvil i temaet er TROENS TVILLING i Plussord.\n#Plussord #troogtvil #tvil",
      title: "Troens tvilling",
    },
    {
      id: 25,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=nPXaI03l6DQ",
      descr:
        "Det finnes både god og dårlig skam - og vi har en Far som elsker oss uavhengig av skammen vår. Hør denne ukens Plussord med Egil Svartdahl.\n#Plussord #EgilSvartdahl #skam",
      title: "Skam",
    },
    {
      id: 26,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=WIB6fnHGzAI",
      title: "Risiko",
      descr:
        "Hvor risikovillig er du? Plussord med Egil Svartdahl om risiko.\n#Plussord #EgilSvartdahl #risiko",
    },
    {
      id: 27,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=naoaO89apss",
      title: "Fordommer",
      descr:
        "Hvilke fordommer har du til andre, og hvordan kan vi bli bedre på å møte mennesker med respekt?\n#Plussord #EgilSvartdahl #Fordommer",
    },
    {
      id: 28,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=NvTSO1ZNOjA",
      descr:
        "I Norge er vi heldige, vi har en lov som står i frihetens tjeneste.  Plussord med Egil Svartdahl.\n#Plussord #EgilSvartdahl #frihet",
      title: "Frihet",
    },
    {
      id: 29,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=VGs3tDmrA_U",
      title: "Kristi himmelfart",
      descr:
        "Denne ukens tema i Plussord med Egil Svartdahl er KRISTI HIMMELFART. Kristi himmelfart er en feiring av Jesu avskjed på jorden, og en velkomst ved Guds høyre hånd.\n#Plussord #EgilSvartdahl #kristihimmelfart",
    },
    {
      id: 30,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=AZqpyxvykvk",
      descr:
        "Denne ukens tema i @Plussord er VENTEROMMET! Hva bruker du ventetiden din på?#Plussord #EgilSvartdahl #andakt",
      title: "Venterommet",
    },
    {
      id: 31,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=YHBJWBwRIAI",
      descr:
        "Tema for denne ukens Plussord er PINSE FOR ALLE. Selv om det kan se ut som mye skiller oss i både uttrykk, meninger og uenigheter, er vi alle elsket av Gud og er en del av Hans hus! \n#Plussord #EgilSvartdahl #pinse",
      title: "Pinse for alle",
    },
    {
      id: 32,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=zHYHuF6Bx6U",
      title: "Å angre",
      descr:
        "Denne ukens tema er HVORFOR ANGRE? I løpet av uken har jeg snakket om angerens styrke, nødvendighet og verdi. Del gjerne videre.\n#angre",
    },
    {
      id: 33,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=wrA8gviSjCE",
      descr:
        "Vet du hva du skal gjøre når du kjenner på indre uro?\n#indreuro",
      title: "Indre uro",
    },
    {
      id: 34,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=noX7fPJGinc",
      title: "Livets lys",
      descr:
        "LIVETS LYS. Vi har en Far som vil lyse opp våre veier og vise oss veien til frelse!\n#lys",
    },
    {
      id: 35,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=dyh1phLQpTY",
      title: "Hvilepuls",
      descr:
        "Når var sist du hadde hvilepuls? \n#hvilepuls",
    },
    {
      id: 36,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=Nz8aUywxylA",
      descr:
        "Ansiktet er ofte det første vi husker fra noen og det siste vi glemmer. Vær derfor frimodig og vis ditt sanne ansikt både overfor Gud og andre mennesker",
      title: "Ansikt til ansikt",
    },
    {
      id: 37,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=tE9F7fNbKgk",
      descr:
        "Kjærlighet kan finnes i mange ulike former og for mange oppleves kjærligheten som meningen med livet!\n#kjærlighet",
      title: "Kjærlighet",
    },
    {
      id: 38,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=SWei4fOM8G4",
      descr:
        "Kjærligheten har mange språk og vi må ofte uttrykke den på riktig måte for å treffe den vi ønsker! La oss hjelpe hverandre å oppdage både vårt eget og andres kjærlighetsspråk.\n#kjærligheten",
      title: "Kjærlighetens språk",
    },
    {
      id: 39,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=96E0tr7a5Go",
      descr:
        "Hjertet vårt kan og burde behandles som en hage. Vi må luke bort det dårlige og dyrke frem det gode",
      title: "Hjertets hage",
    },
    {
      id: 40,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=6six_49NvHs",
      descr:
        "Denne ukens tema er SMITTENDE TRO. Har du noen gang møtt noen som har en smittende tro?",
      title: "Smittende tro",
    },
    {
      id: 41,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=YhbIHRg31Ik",
      title: "Trygg tro",
      descr:
        "Vårt fokus er viktig både i levemåte og holdninger til livet - velg å fokuser på det riktige og viktige.",
    },
    {
      id: 42,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=yXN16anDvAY",
      posSecList: [0,57,112,168,218,279,346,358],
      title: "Fokus",
      descr:
        "Vårt fokus er viktig både i levemåte og holdninger til livet - velg å fokuser på det riktige og viktige.\n#fokus",
    },
    {
      id: 43,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=69f6Uxqoi-U",
      title: "Gode rykter",
      descr:
        "Vi vil alle ha gode rykter knyttet til vårt navn, og vi kan selv være med på å spre gode rykter om andre.\n#goderykter",
    },
    {
      id: 44,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=AAT2gGUaWcA",
      descr:
        "Integritet handler om helhet, dybde og karakter i livet vårt.\n#integritet",
      title: "Integritet",
    },
    {
      id: 45,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=idtxSZjU-e4",
      title: "Behovets barn",
      descr:
        "Denne ukens tema er BEHOVETS BARN.",
    },
    {
      id: 46,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=39DlYC_eoAI",
      descr:
        "Å bli frelst eller å møte Jesus er en ekstrem forvandling for mange - la oss være forbilder for ekstrem forvandling.",
      title: "Ekstrem forvandling",
    },
    {
      id: 47,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=SFamgFhZF9I",
      descr:
        "Vi har alle et forhold til rytme - enten det er hjerterytme, musikk, tro og hverdagsliv!\n#livsrytme",
      title: "Livsrytme",
    },
    {
      id: 48,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=RvLe0vM6fxI",
      title: "Røtter",
      descr:
        "Hvor har du dine røtter? Det motsatte av å være rotløs og rastløs, er å være rotfestet og grunnfestet.\n#røtter",
    },
    {
      id: 49,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=kPrVjbbAT8M",
      title: "Drømmer",
      descr: "Hva drømmer du om?\n#drømmer",
    },
    {
      id: 50,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=WgBfatsKHu8",
      title: "Pakten",
      descr:
        "Hvorfor er pakter viktige i ditt liv?\n#pakten",
    },
    {
      id: 51,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=ZB_yATmUDII",
      descr:
        "Samvittigheten vår er et viktig instrument, men ikke alltid en ufeilbar rettesnor.\n#samvittighet",
      title: "Samvittighet",
    },
    {
      id: 52,
      filename: "https://www.youtube.com/watch?v=I90lLnr-bTk",
      descr:
        "I dag er det Allehelgensdag, der vi minnes de vi har mistet - og som vi en gang skal møte igjen\n#allehelgensdag",
      title: "Udødelighet",
    },
    {
      id: 53,
      image: { origin: "icon" },
      filename: "https://www.youtube.com/watch?v=FqQS6ww5Z2Y",
      descr:
        "Dette er siste film i sesong 1 av Plussord, og tilbakemeldingene vi har fått er at velsignelsen er den viktigste delen av Plussord for veldig mange. Derfor har vi denne uken viet Plussordene til temaet velsignelsen.\n#velsignelsen",
      title: "Velsignelsen",
    },
  ],
  title: "PlussOrd Sesong 1",
  iconList: true,
  image: {
    origin: "Url",
    filename:
      "https://static.wixstatic.com/media/080448_6a046f09d77f4a878bca1171518a7205~mv2.jpg/v1/fill/w_980,h_731,al_c,q_90/080448_6a046f09d77f4a878bca1171518a7205~mv2.webp",
  },
  description: "",
  language: "eng",
  mediaType: "vid",
};

export const norwegianWeekdayNames = [
  "Mandag",
  "Tirsdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lørdag",
  "Søndag"
]

export const plussOrdObj = {
  episodeList: rangeArray(294,365).map((inx) => {
    const weekDayInx = inx % 7
    const weekInx =  Math.floor(inx / 7)
    const obj = plussOrdPlaylist.fileList[weekInx]
    if (!obj.treeNode) {
      const posSecList = obj.posSecList 
      let begin
      let end
      // [0,60,115,170,215,270,346]
      const blessingsPos = [346,358]
      if (weekDayInx === 6) {
        begin = 0
        end = 500
      } else if (posSecList) {
        begin = posSecList[weekDayInx]
        if (begin>0) begin -= 1
        end = posSecList[weekDayInx+1]
      } else {
        const begPosList = [0,55,110,165,210,265]
        const endPosList = [60,115,170,215,270,350]
        begin = begPosList[weekDayInx]
        end = endPosList[weekDayInx]
      }
      return {
        id: inx,
        title: `${obj.title} - ${norwegianWeekdayNames[weekDayInx]}`,
        descr: obj.descr,
        begTimeSec: begin,
        endTimeSec: end,
        filename: obj.filename,
        image: { origin: "icon" },
      };
    } else {
    }
  }),
  title: "Pluss Ord",
  uniqueID: "PlussOrd.TVInter",
  beginDate: "2024-08-12",
  image: {
    origin: "ImgId",
    filename: "John.ImgId",
  },
  language: "eng", // To To: change this to Norwegian
  mediaType: "vid",
};
