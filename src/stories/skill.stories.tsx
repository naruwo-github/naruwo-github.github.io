import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skill from '../contents/skill/skill';
import { LanguageContext } from '../app';

export default {
    title: 'Portfolio/Body/Skill',
    component: Skill,
} as ComponentMeta<typeof Skill>;

const Template: ComponentStory<typeof Skill> = (args) => <Skill {...args} />;
const skillItemsTemplate = [
    {
        img: 'path/to/skill1/icon',
        name: 'skill1',
        textJp: [
            'スキル1の説明。'
        ],
        textEn: [
            'Skill1 description.'
        ]
    },
    {
        img: 'path/to/skill2/icon',
        name: 'skill2',
        textJp: [
            'スキル2の説明。'
        ],
        textEn: [
            'Skill2 description.'
        ]
    },
    {
        img: 'path/to/skill3/icon',
        name: 'skill3',
        textJp: [
            'スキル3の説明。'
        ],
        textEn: [
            'Skill3 description.'
        ]
    },
]

export const Japanese = Template.bind({});
Japanese.args = {
    skillItems: skillItemsTemplate
};
Japanese.decorators = [
    (Story) => (
        <LanguageContext.Provider value={{ isSwitched: false, setIsSwitched: () => { } }}>
            <Story />
        </LanguageContext.Provider>
    ),
]

export const English = Template.bind({});
English.args = {
    skillItems: skillItemsTemplate
};
English.decorators = [
    (Story) => (
        <LanguageContext.Provider value={{ isSwitched: true, setIsSwitched: () => { } }}>
            <Story />
        </LanguageContext.Provider>
    ),
]
