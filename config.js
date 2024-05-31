var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsbHdjMWNsODA0NnMzanN5amI3YjVwdzgifQ.PL1xMSDztFZISCkgeNZ2gg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:\'PT Sans\'; font-weight: 300; padding: 0.1vh; border-radius: 5px; color: #000000; font-size: 1.5rem; display: block; margin-bottom: 1px;">VALURI DE CĂLDURĂ ÎN ROMÂNIA</span>',
    subtitle: '<span style="font-family: \'Anton\'; color: #000000; font-size: 4rem; font-weight: 500;"> CUM NE AFECTEAZĂ <span style="font-weight: 500; animation: colorFade 6s infinite;" class="outlined">ÎNCĂLZIREA GLOBALĂ</span></span>',

    byline: '<p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 15 mai 2024 <br> Sursa datelor: ',
    chapters: [
        {
            id: 'cap0',
            daysAgo: 80,
            showTimeline: false,
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            description: '',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap1',
            daysAgo: 80,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Încălzirea globală nu mai este o previziune a viitorului îndepărtat; efectele sale sunt deja resimțite în prezent. În România, creșterea temperaturii medii anuale cu doar 1.5 grade Celsius are consecințe semnificative asupra climatului, sănătății publice și economiei.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap2',
            daysAgo: 80,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'primul.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap3',
            daysAgo: 80,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'doilea.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap4',
            daysAgo: 20,
            showTimeline: false,            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'treilea.png',
            location: {
                // center: [31.2718321, 49.4871968],
                // zoom: 5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },

        {
            id: 'cap5',
            daysAgo: 20,
            showTimeline: false,
            alignment: 'center',
            
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'patrulea.png',
            location: {
                // center: [31.2718321, 49.4871968],
                // zoom: 5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'cap6',
            daysAgo: 700,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'cincilea.png',
            location: {
                // center: [31.2718321, 49.4871968],
                // zoom: 5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap7',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Din 1940 până în prezent, temperatura medie anuală a crescut treptat, cu mici variații. În 2023 s-a înregistrat o temperatură medie anuală de 11.6 grad Celsius. ',
            overlayImage: 'generalgrafic.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'cap8',
            daysAgo: 22,
            showTimeline: false,
            
            triggerCustomScroll: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18179201/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18179201/?utm_source=embed&utm_campaign=visualisation/18179201" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },




        {
            id: 'cap9',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Principalul indicator pe care îl folosim pentru a monitoriza încălzirea globală este anomalia de temperatură. Acest indicator nu ne arată temperatura absolută într-o anumită lună, ci cât de diferită este în comparație cu temperaturile istorice.',
            overlayImage: 'blank',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        
        
        },


        {
            id: 'cap10',
            daysAgo: 700,
            showTimeline: false,           
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Această anomalie trebuie măsurată în raport cu o bază de referință a temperaturii. Baza de referință este, de obicei, stabilită prin calcularea mediei temperaturilor pe parcursul mai multor decenii. O anomalie pozitivă indică temperaturi mai ridicate decât baza de referință, în timp ce o anomalie negativă arată condiții mai reci. Pentru analiza noastră, am selectat perioada 1991-2020 ca referință, care este perioada de bază implicită a ECMF. ',
            overlayImage: 'blank',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap11',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18171982/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18171982/?utm_source=embed&utm_campaign=visualisation/18171982" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap12',
            daysAgo: 731,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Disconfortul termic', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încălzirea globală contribuie semnificativ la creșterea disconfortului termic resimțit de oameni. Pe măsură ce temperaturile medii globale cresc, valurile de căldură devin mai frecvente și mai intense. Aceste condiții extreme afectează capacitatea organismului uman de a-și regla temperatura internă, crescând riscul de epuizare termică și insolație. În plus, creșterea umidității relative agravează senzația de căldură, făcând ca perioadele de vară să devină și mai greu de suportat. Efectele disconfortului termic se resimt nu doar la nivel fizic, ci și psihologic, afectând productivitatea și starea generală de bine a populației. ',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap12.1',
            daysAgo: 731,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În primele două decenii ale secolului 21, Europa a experimentat episoade de valuri de căldură prelungite și excepționale, cu temperaturi record în multe regiuni. O clasificare formală a primelor 10 valuri de căldură din Europa, care au avut loc între 1950 și 2015, a indicat că 6 dintre cele mai importante episoade s-au petrecut în ultimii 15 ani. De exemplu, vara anului 2003 din vestul și centrul Europei, considerată una dintre cele mai fierbinți veri europene de la anul 1500, a dus la peste 70.000 de decese',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap13',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<img src="ziledisconfort.png">',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap14',
            daysAgo: 650,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Creșterea mortalității', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încălzirea globală contribuie semnificativ la creșterea mortalității în exces prin intensificarea și prelungirea perioadelor de căldură extremă. Temperaturile ridicate și valurile de căldură devin din ce în ce mai frecvente și mai severe, afectând în mod disproporționat persoanele vârstnice, copiii și cei cu afecțiuni preexistente. Aceste condiții extreme suprasolicită capacitatea organismului de a-și menține o temperatură internă stabilă, ducând la probleme grave de sănătate, cum ar fi epuizarea termică și insolația. De exemplu, valurile de căldură din Europa au provocat zeci de mii de decese suplimentare în ultimii ani, iar previziunile indică o agravare a acestei tendințe.',
            overlayImage: 'blank',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap15',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18181766/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18181766/?utm_source=embed&utm_campaign=visualisation/18181766" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap16',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Sanatatea mintala', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încălzirea globală afectează negativ sănătatea mintală prin intensificarea stresului termic și a evenimentelor meteorologice extreme, cum ar fi valurile de căldură și fenomenele meteorologice severe. Aceste condiții pot agrava anxietatea, depresia și alte tulburări psihice. De asemenea, schimbările climatice contribuie la insecuritatea locuinței și a alimentației, provocând stres și traume psihologice. Evenimentele climatice extreme pot duce la pierderi materiale și umane semnificative, generând sentimente de neputință și disperare.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap17',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'aici vine grafic (ilustratie sanatate mintala)',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap18',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Insula de căldură urbană / Energie', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Insula de căldură urbană apare când zonele urbane devin mai calde decât cele rurale din cauza activităților umane și a infrastructurii. Suprafețele pavate și clădirile rețin căldura, iar emisiile de la vehicule și industrie contribuie la creșterea temperaturilor. Acest fenomen agravează disconfortul termic, problemele de sănătate legate de căldură și crește consumul de energie pentru răcire. De asemenea, poate deteriora calitatea aerului. Pentru a reduce efectele insulei de căldură, orașele pot crește suprafețele verzi, folosi materiale reflectorizante și promova transportul durabil.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },


        {
            id: 'cap19',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Agricultura', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încălzirea globală are un impact semnificativ asupra agriculturii în România, afectând productivitatea și calitatea culturilor. Schimbările climatice duc la creșterea frecvenței și intensității fenomenelor meteorologice extreme, cum ar fi seceta, inundațiile și valurile de căldură, care pot distruge recoltele și solurile agricole. Temperaturile ridicate și precipitațiile neregulate perturbă ciclurile de creștere ale plantelor și reduc disponibilitatea apei, esențială pentru irigații. ',
            overlayImage: 'Blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap20',
            daysAgo: 20,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18184560/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18184560/?utm_source=embed&utm_campaign=visualisation/18184560" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap21',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Ce putem face', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pentru a combate efectele încălzirii globale asupra agriculturii în România, este esențial să adoptăm măsuri de adaptare și mitigare. Printre aceste măsuri se numără dezvoltarea și implementarea tehnologiilor agricole sustenabile, precum irigațiile eficiente și utilizarea culturilor rezistente la secetă. De asemenea, promovarea practicilor agricole prietenoase cu mediul, cum ar fi rotația culturilor și utilizarea fertilizatorilor organici, poate îmbunătăți sănătatea solului și rezistența acestuia la schimbările climatice. ',
            overlayImage: 'blank.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


















        


        
        

    ]
};