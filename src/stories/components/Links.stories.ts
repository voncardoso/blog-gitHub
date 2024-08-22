import type {Meta, StoryObj} from '@storybook/react';
import {Links} from "../../components/Links";
import {PositionIcon} from "../../enums/PositionIcon.ts";
import { faUpRightFromSquare, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
    ChevronLeft: faChevronLeft,
    ChevronRight: faChevronRight,
    UpRightFromSquare: faUpRightFromSquare,
};


const meta: Meta = {
    title: 'Components/Links',
    component: Links,
    args: {
        title: 'GITHUB',
        url: '',
        positionIcon: PositionIcon.Right,
        icon: faChevronRight
    },
    argTypes: {
      positionIcon: {
          control:{type: 'radio'},
            options: [PositionIcon.Left, PositionIcon.Right]
      },
      icon: {
          control: {type: 'radio'},
          options: Object.keys(iconMap),
          mapping: iconMap
      }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Links>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: "UpRightFromSquare"
    },
}