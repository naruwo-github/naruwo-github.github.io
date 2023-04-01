import { ComponentStory, ComponentMeta } from '@storybook/react';
import Works from '../contents/works/works';

export default {
    title: 'Portfolio/Body/Works',
    component: Works,
} as ComponentMeta<typeof Works>;

const Template: ComponentStory<typeof Works> = (args) => <Works {...args} />;
const worksItemsTemplate = [
    {
        ref: 'path/to/ref',
        img: 'path/to/image',
        name: 'Work1',
        info: 'Work1 description.'
    },
    {
        ref: 'path/to/ref',
        img: 'path/to/image',
        name: 'Work2',
        info: 'Work2 description.'
    },
    {
        ref: 'path/to/ref',
        img: 'path/to/image',
        name: 'Work3',
        info: 'Work3 description.'
    },
]

export const Primary = Template.bind({});
Primary.args = {
    worksItems: worksItemsTemplate
};
