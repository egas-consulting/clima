var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNseG9xNHBwODBma3kyc3Fyd3JhYmtmeGcifQ.ME8u7SSIIraADloYWQPduw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:\'Source Serif Pro\'; font-weight: 300; padding: 0.1vh; border-radius: 5px; color: #ffffff; font-size: 1.5rem; display: block; margin-bottom: 1px;">VALURI DE CĂLDURĂ ÎN ROMÂNIA</span>',
    subtitle: '<span style="font-family: \'Source Serif Pro\'; color: #ffffff; font-size: 4rem; font-weight: 600;"> CUM NE AFECTEAZĂ <span style="font-weight: 400; animation: colorFade 6s infinite;" class="outlined">ÎNCĂLZIREA GLOBALĂ</span></span>',

    byline: '<p> <img src="./scroll.gif"> </p>',
    footer: '<br> 25 iunie 2024 <br> Sursa datelor: Copernicus, Institutul Național de Statistică, Our world in data, exhaustion.eu, Antonescu, B., Mărmureanu, L., Vasilescu, J., Marin, C., Andrei, S., Boldeanu, M., Ene, D., & Ţilea, A. (2020). A 41-year bioclimatology of thermal stress in Europe <br> Material realizat în cadrul proiectului: Fenomene Extreme în Climatul Viitor al României <br> Imaginile sunt generate folosind Dall-E 2, Design și vizualizare de date: Egas.studio',
    chapters: [
        
        {
            id: 'cap1.1',
            daysAgo: 80,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Încălzirea globală nu mai reprezintă o previziune îndepărtată. Efectele acesteia sunt deja evidente în prezent. În România, <b style="background-color:#FBC3A8;">o creștere a temperaturii medii anuale cu doar 1,5 grade Celsius are consecințe semnificative</b> asupra climatului, sănătății publice și economiei. Este dificil să vizualizăm implicațiile încălzirii globale fără un punct de referință și și mai dificil să ne gândim la efecte fără comparații.',
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
                // {callback: 'createSnowflakes',
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
            description: 'Să ne imaginăm următorul scenariu: două personaje de vârstă apropiată. Primul personaj trăiește în 1940, iar al doilea este contemporan cu noi.',
            overlayImage: 'stateone.png',
            
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
                // {callback: 'createSnowflakes',
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
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Iernile din România anilor 1940 erau cunoscute pentru temperaturile lor scăzute, ninsorile abundente și perioadele lungi de frig intens. În acea perioadă, zăpada era o prezență constantă pe durata iernii, iar gerurile năprasnice erau obișnuite.',
            overlayImage: 'statewinter.png',
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
            id: 'cap3',
            daysAgo: 80,
            showTimeline: false,
            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În contrast, iernile de astăzi sunt mult mai blânde, cu temperaturi medii mai ridicate și ninsori mai rare și mai puțin consistente. Schimbările climatice au dus la o scădere a frecvenței și intensității fenomenelor de iarnă, iar perioadele de îngheț sunt mai scurte și mai puțin severe. ',
            overlayImage: 'statewinterchart.png',
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
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În anii 1940, primăverile erau caracterizate printr-o tranziție lentă de la iarnă la vară, cu temperaturi reci care persista până târziu în aprilie și chiar mai, și cu ploi consistente',
            overlayImage: 'statespringchart.png',
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
            id: 'cap5',
            daysAgo: 20,
            showTimeline: false,
            alignment: 'center',
            
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Verile din România au suferit transformări notabile de-a lungul decadelor, devenind din ce în ce mai lungi și mai toride. În anii 1940, verile erau temperate, cu temperaturi medii mai suportabile. În luna lui cuptor (iulie) din 1940, temperatura medie lunară era de 19,8 grade Celsius. În contrast, în 2023, temperatura medie lunară în aceeași perioadă a crescut la 22,3 grade Celsius.',
            overlayImage: 'statesummerchart.png',
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
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Toamnele din România au suferit schimbări semnificative din cauza încălzirii globale. În anii 1940, toamnele erau caracterizate de o tranziție lină de la vară la iarnă, cu temperaturi moderate și ploi previzibile. Astăzi, temperaturile fluctuează brusc, perioadele de căldură se prelungesc, iar ploile sunt neregulate, alternând între secetă și precipitații intense. ',
            overlayImage: 'statefallchart.png',
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
            description: 'Din 1940 până în prezent, temperatura medie anuală a crescut treptat, cu mici variații. În 2023 s-a înregistrat o temperatură medie anuală de <b style="background-color:#FBC3A8;">11.6 grade Celsius.</b> ',
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
            id: 'cap7.1',
            daysAgo: 365,
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
            id: 'cap7.2',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'treilea.png',
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
            id: 'cap7.3',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'patrulea.png',
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
            id: 'cap7.4',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: ' ',
            overlayImage: 'cincilea.png',
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
            description: '<iframe src="https://flo.uri.sh/visualisation/18179201/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:350px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18179201/?utm_source=embed&utm_campaign=visualisation/18179201" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: 'Principalul indicator pe care îl folosim pentru a monitoriza încălzirea globală este <b style="background-color:#FBC3A8;">anomalia de temperatură.</b> Acest indicator nu ne arată temperatura absolută într-o anumită lună, ci cât de diferită este în comparație cu temperaturile istorice.',
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
            id: 'cap10',
            daysAgo: 700,
            showTimeline: false,           
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Această anomalie trebuie măsurată în raport cu o bază de referință a temperaturii. Baza de referință este, de obicei, stabilită prin calcularea mediei temperaturilor pe parcursul mai multor decenii. <b style="background-color:#FBC3A8;">O anomalie pozitivă indică temperaturi mai ridicate</b> decât baza de referință, în timp ce o anomalie negativă arată condiții mai reci. Pentru analiza noastră, am selectat perioada 1991-2020 ca referință, care este perioada de bază implicită a ECMF. ',
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
            id: 'cap11',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18171982/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:350px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18171982/?utm_source=embed&utm_campaign=visualisation/18171982" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            id: 'cap9.1',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Ce înseamnă acest lucru și cum ne afectează?', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Anomaliile de temperatură s-au accentuat semnificativ în ultimele decenii, provocând fluctuații extreme între perioade de căldură intensă și valuri de frig neobișnuite. Aceste schimbări climatice destabilizează ecosistemele, afectează productivitatea agricolă și pun presiune pe resursele de apă. În plus, <b style="background-color:#FBC3A8;">cresc riscurile pentru sănătatea publică, afectează infrastructura și intensifică fenomenele meteorologice extreme.</b>',
            overlayImage: 'pamant.png',
            
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
            description: 'Încălzirea globală contribuie semnificativ la creșterea disconfortului termic resimțit de oameni. Pe măsură ce temperaturile medii globale cresc, valurile de căldură devin mai frecvente și mai intense. Aceste condiții extreme afectează capacitatea organismului uman de a-și regla temperatura internă, crescând riscul de epuizare termică și insolație. ',
            overlayImage: 'batrani.png',
            
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
            description: 'În plus, creșterea umidității relative agravează senzația de căldură, făcând ca perioadele de vară să devină și mai greu de suportat. Efectele disconfortului termic se resimt nu doar la nivel fizic, ci și psihologic, afectând productivitatea și starea generală de bine a populației. ',
            overlayImage: 'batrani.png',
            
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
            description: 'În primele două decenii ale secolului 21, Europa a experimentat episoade de valuri de căldură prelungite și excepționale, cu temperaturi record în multe regiuni. O clasificare formală a primelor 10 valuri de căldură din Europa, care au avut loc între 1950 și 2015, a indicat că <b style="background-color:#FBC3A8;">6 dintre cele mai importante episoade s-au petrecut în ultimii 15 ani.</b> De exemplu, vara anului 2003 din vestul și centrul Europei, considerată una dintre cele mai fierbinți veri europene de la anul 1500, a dus la peste 70.000 de decese',
            overlayImage: 'batrani.png',
            
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
            id: 'cap13.1',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18467368/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:350px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18467368/?utm_source=embed&utm_campaign=visualisation/18467368" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: 'Încălzirea globală contribuie semnificativ la creșterea mortalității în exces prin intensificarea și prelungirea perioadelor de căldură extremă. Temperaturile ridicate și valurile de căldură devin din ce în ce mai frecvente și mai severe, afectând în mod disproporționat persoanele vârstnice, copiii și cei cu afecțiuni preexistente.',
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
            id: 'cap14.1',
            daysAgo: 650,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Aceste condiții extreme suprasolicită capacitatea organismului de a-și menține o temperatură internă stabilă, ducând la probleme grave de sănătate, cum ar fi epuizarea termică și insolația. Valurile de căldură din Europa au provocat zeci de mii de decese suplimentare în ultimii ani, iar previziunile indică o agravare a acestei tendințe.',
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
            id: 'cap15',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18181766/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:350px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18181766/?utm_source=embed&utm_campaign=visualisation/18181766" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            title: 'Insula de căldură urbană', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Insula de căldură urbană apare când zonele urbane devin mai calde decât cele rurale din cauza activităților umane și a infrastructurii. Suprafețele pavate și clădirile rețin căldura, iar emisiile de la vehicule și industrie contribuie la creșterea temperaturilor. Acest fenomen agravează disconfortul termic, problemele de sănătate legate de căldură și crește consumul de energie pentru răcire.',
            overlayImage: 'pamant.png',
            
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
            id: 'cap18.11',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'De asemenea, poate deteriora calitatea aerului. Pentru a reduce efectele insulei de căldură, orașele pot crește suprafețele verzi, folosi materiale reflectorizante și promova transportul durabil.',
            overlayImage: 'pamant.png',
            
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
            id: 'cap18.1',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Potrivit unui studiu realizat în 2015, temperatura medie de vară a variat între 14,2°C în Glasgow, Marea Britanie, și 29,7°C în Sevilla, Spania, cu temperaturi maxime medii variind între 22,7°C în Tallinn, Estonia, și 36,8°C în Sevilla, Spania. Media ponderată a efectului insulei de căldură urbană (UHI) zilnică pe orașe, din iunie până în august, a fost de 1,5°C (interval pe orașe 0,5°C - 3,0°C), cu valori maxime pe celulă de grilă ajungând la 4,1°C în Cluj-Napoca, România.',
            overlayImage: 'pamant.png',
            
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
            id: 'cap18.2',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În toate orașele studiate, aproape 75% și 20% din populație (57 milioane și respectiv 14 milioane de locuitori) trăiau în zone cu o intensitate a insulei de căldură urbană (UHI) de peste 1ºC și 2ºC. În total, 6.700 de decese premature (95% CI 5.254 - 8.162) ar putea fi atribuite UHI în timpul verii (4,3% din mortalitatea de vară și 1,8% din mortalitatea anuală) și 2.644 de decese premature (95% CI 2.444-2.824) ar putea fi prevenite prin creșterea TC la 30% (1,8% din mortalitatea de vară și 0,4% din mortalitatea anuală). Acest lucru reprezintă, în medie, 39,5% din decesele atribuite UHI.',
            overlayImage: 'pamant.png',
            
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
            id: 'cap18.3',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'hartadoi.png',
            
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
            id: 'cap18.4',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'harta.png',
            
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
            overlayImage: 'pamant.png',
            
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
            description: '<iframe src="https://flo.uri.sh/visualisation/18184560/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:350px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18184560/?utm_source=embed&utm_campaign=visualisation/18184560" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'pamant.png',
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
            description: 'Pe măsură ce valurile de căldură devin mai frecvente și mai intense în România odată cu creșterea stresului termic, este crucial să înțelegem consecințele acestor fenomene extreme asupra sănătății noastre și asupra mediului înconjurător. Informarea corectă și conștientizarea schimbărilor climatice ne ajută să ne adaptăm mai bine la aceste condiții extreme. Protejându-ne pe noi înșine și mediul, contribuim la construirea unui viitor mai sigur pentru noi toți.',
            overlayImage: 'pamant.png',
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