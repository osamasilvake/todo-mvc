import { ExampleHeadingLevelType } from "./ExamplesHeading.enum";

export interface ExampleProps {
    title: string;
    headingLevel?: ExampleHeadingLevelType;
    headingStyle?: string;
}