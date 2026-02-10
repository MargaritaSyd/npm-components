// 1.meta
// 2.stories
// 3. type meta and stories
import {type Meta, type StoryObj} from "@storybook/nextjs-vite"
import Avatar from "./avatar";
const meta = {
    title: "Design System/Atom/Avatar",
    component: Avatar,
    args: {
        size: "md"
    }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>

export const Default = {} satisfies Story;

export const Small = {
     args: {
        size: "sm"
    }
} satisfies Story;

export const Medium = {
     args: {
        size: "md"
    }
} satisfies Story;

export const Large = {
     args: {
        size: "lg"
    }
} satisfies Story;

export const XLarge = {
     args: {
        size: "xlg"
    }
} satisfies Story;