import { FeatureSectionInterface } from "./FeatureOverview.interface";

export const featureSections: FeatureSectionInterface[] = [
    {
      id:1,
      title: "New in 1.4",
      description: `New Additions ✨
  To stay representative of frameworks & language features used on the web, we added a few new example apps.
  
  Examples ▼
  Updated Versions 🧹
  Some updates to examples that were out-of-date, but still widely used on the web.
  
  Examples ▼
  Misc. updates to the homepage.`,
    },
    {
      id:2,
      title: "Selecting a Framework",
      description: `Once you've downloaded the latest release and played around with the apps, you'll want to decide on a specific framework to try out.
  
  Study the syntax required for defining models, views and (where applicable) controllers and classes in the frameworks you're interested in and try your hand at editing the code to see how it feels using it first-hand.
  
  Please ensure that if you're happy with this, you do spend more time investigating the framework (including reading the official docs, the source and its complete feature list). There's often a lot more to a framework than what we present in our examples.`,
    },
    {
      id:3,
      title: "Getting Involved",
      description: `Is there a bug we haven't fixed or an MV* framework you feel would benefit from being included in TodoMVC?
  
  If so, feel free to fork the repo, read our contribution guidelines, and submit a pull request — we'll be happy to review it for inclusion.
  
  Make sure you use the template as a starting point and read the app specification.`,
      button: {
        label: "Submit Pull Request"
      },
    },
  ];
  