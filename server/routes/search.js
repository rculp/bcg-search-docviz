var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
  res.json(
    {
      totalHitCount: 20,
      results: [
        {
          title: 'Deep dive analyses on sourcing corrugated cartons and film flexibles',
          authors: [
            { name: 'Wouter Jan Schouten' },
            { name: 'Christian Worp' }
          ],
          uploadDate: '2018-06-27 13:49:28',
          abstract: 'At the client - an international conglomerate in food/confectionary - we found in the initial phase that most of the traditional procurement improvements were already implemented. We then focused the project on reducing over specification and fragmentation. This was one part of a broader effort to reduce complexity. As part of this effort we did two deep dive analyses on corrugated cartons and on film flexibles. Cost drivers, improvement potential and golden rules are outlined.',
          materialType: [
            'Case Vignettes'
          ],
          geographicalRegion: 'EMEA',
          industryPA: [
            'Industrial Goods',
            'Consumers'
          ],
          relevancyScore: 0.94,
          numberOfDownloads: 3000,
          numberOfLikes: 430,
          recommended: 40,
          language: 'en',
          smallSummaryHtml: 'leads ... spec White top/<b>test </b>High packaging weight ... kraft/euro/<b>test </b>... kraft/<b>test </b>... GD2/<b>test </b>100% 32% 81% ... <b>test</b>/euro/<b>test </b>... white <b>test</b>/recycled grey/ <b>test </b>... <b>test</b>/<b>test </b>... <b>test</b>/<b>test </b>... database White top/<b>test </b>High packaging weight ... 10.000 pc orders <b>Test</b>/<b>test </b>Low packaging weight ... 3.000 pc orders <b>Test</b>/<b>test </b>Low packaging weight ... White top/<b>Test </b>'
        },
        {
          title: 'Primer on Stress Testing',
          authors: [
            { name: 'Sonja Meierl' },
            { name: 'Philippe Morel' },
            { name: 'Peter Neu' }
          ],
          uploadDate: '2018-06-27 14:45:39',
          abstract: 'This deck gives a definition of stress tests and contrasts the stress testing concept with value at risk. Furthermore it outlines the different stress testing techniques and sheds light on the specifics of different risk types.Another focus of the deck has been set on the construction and formulation of stress testing scenarios.Additionally it gives information about reporting and organizational embedding of stress testing results.Finally this deck summarizes the regulatory requirements concerning stress tests for financial institutions defined by the Bank for International Settlements.',
          materialType: [
            'Primers'
          ],
          geographicalRegion: 'EMEA',
          industryPA: [
            'Financial Institutions'
          ],
          relevancyScore: 0.79,
          numberOfDownloads: 4000,
          numberOfLikes: 760,
          recommended: 120,
          language: 'en',
          smallSummaryHtml: 'is a stress <b>test </b>Construction of ... A stress <b>test </b>of a ... selected as stress <b>test </b>... is a stress <b>test </b>Construction of ... The <b>test </b>to be ... The <b>test </b>to be ... undertaking this stress <b>test </b>requirement, depending ... The bank&#39;s stress <b>test </b>in this ... of the stress <b>test </b>may ... not need to <b>test </b>for '
        },
        {
          title: 'Russian healthcare and diagnostics labs market',
          authors: [
            { name: 'Damaris Ammann' },
            { name: 'Arun Bruce' },
            { name: 'Petra Halferkamps' },
            { name: 'Ewald Kreid' },
            { name: 'Ulrik Schulze' },
            { name: 'Valeriu Smiricinschi' },
            { name: 'Felix Yukhtmakher' }
          ],
          uploadDate: '2018-06-27 14:54:31',
          abstract: 'These materials are an extract from a commercial due diligence project performed in Russia, consisting of two parts.-Russian Healthcare Market Assessment: structure, size, growth and trends of five healthcare segments (healthcare funding, diagnostic labs, hospitals, medical supplies, and pharma distribution)-Analysis of the Russian diagnostic labs market: including international benchmark of diagnostic labs and analysis of structure, size, growth, trends and competitors in the Russian diagnostic labs market',
          materialType: [
            'Research Materials'
          ],
          geographicalRegion: 'EMEA',
          industryPA: [],
          relevancyScore: 0.32,
          numberOfDownloads: 30,
          numberOfLikes: 5,
          recommended: 2,
          language: 'en',
          smallSummaryHtml: '= USD 0.7/ <b>test </b>... BCG analysis Multiple <b>test </b>... blood count, HIV <b>test </b>and Total cholesterol <b>test </b>... adoption of new <b>test </b>... adoption of Molecular <b>tests </b>Consolidation of some <b>tests </b>... guarantee high quality <b>test </b>... do replace old <b>test </b>... to conduct 30-40 <b>Tests</b>... Availability of the <b>test </b>... Accuracy of <b>test </b>'
        },
        {
          title: 'ERP project organization : planning methodology ;  progress monitoring, tools and PMO ; milestones for a SAP template roll-out project',
          authors: [
            { name: 'Julien Dangles' },
            { name: 'Christophe Duthoit' },
            { name: 'Mark Freedman' },
            { name: 'Alexandra Lehmann' },
            { name: 'Vanessa Lyon' },
            { name: 'Emmanuel Nazarenko' },
            { name: 'Kai Taylor' }
          ],
          uploadDate: '2018-06-27 16:28:08',
          abstract: 'Client is a global manufacturer of electrical components offering products, services and integrated solutions. He is selling products in 130 countries and is facing very heterogeneous business processes in different countries. Objective was to build one global SAP system in order to standardize, consolidate and fully harmonize IT.The heavy business transformation started by the client was stopped because the system integrator in charge esteemed the effort being too comples. Our role was to assist the client in setting up a project management office (PMO) to have transparency of the project status and improve project efficiency.The first deck gives an overview of the (new) set-up and organization of the ERP project.The second deck outlines the structure of the PMO and the progress tracking principles.The third deck explains how to build the planning for an ERP project and how to follow up the planning.The last deck focuses on project planning and monitoring of SAP template builds and roll-outs.',
          materialType: [
            'Case Examples'
          ],
          geographicalRegion: 'EMEA',
          industryPA: [
            'Industrial Goods',
            'Insurance'
          ],
          relevancyScore: 0.15,
          numberOfDownloads: 0,
          numberOfLikes: 0,
          recommended: 0,
          language: 'en',
          smallSummaryHtml: '&amp; Training Develop <b>test </b>... <b>test </b>... &amp; Training Develop <b>test </b>... needed Build and <b>test </b>sub-processes and processes <b>Test </b>... D9 Country <b>test </b>... plants, countries) 109 <b>Test </b>strategy developed <b>Test </b>... P10 Pilot <b>test </b>... developed Pilot 8(1) <b>Test </b>strategy developed <b>Test </b>... data set Identify <b>test </b>... environment Load <b>test </b>'
        }
      ]
    }
  );
});

module.exports = router;
