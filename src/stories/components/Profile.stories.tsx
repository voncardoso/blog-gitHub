import {Meta, StoryObj} from '@storybook/react';
import { Profile } from "../../components/Profile";
import {Links} from "../../components/Links";

interface ProfileArgs {
    title: string;
    description: string;
    image: string;
}

const meta: Meta ={
    title: 'Components/Profile',
    args: {
        title: 'Cameron Williamson',
        description: 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    tags: ['autodocs'],
}

export default meta;

export const Default: StoryObj<ProfileArgs> = {
    args: {
        title: "Von Harrison"
    },
    render: ({title, description, image}) =>
        (
            <Profile.Root>
                <Profile.Image src={image} alt="profile" />
                <Profile.Content>
                    <Profile.Header>
                        <Profile.Title title={title}/>
                        <Links title={"GITHUB"} url={""}/>
                    </Profile.Header>
                    <Profile.Description
                        description={description}
                    />
                    <Profile.Footer>
                        <div>
                            <img src={""} alt=""/>
                            <p>5 completados</p>
                        </div>
                        <div>
                            <img src={""} alt=""/>
                            <p>5 completados</p>
                        </div>
                    </Profile.Footer>
                </Profile.Content>
            </Profile.Root>
        )
}

export const NoImage: StoryObj<ProfileArgs> = {
    argTypes: {
        image: { control: { disable: true } }
    },
    render: ({title, description}) =>(
        <Profile.Root>
            <Profile.Content>
                <Profile.Header>
                    <Profile.Title title={title}/>
                    <Links title={"GITHUB"} url={""}/>
                </Profile.Header>
                <Profile.Description
                    description={description}
                />
                <Profile.Footer>
                    <div>
                        <img src={""} alt=""/>
                        <p>5 completados</p>
                    </div>
                    <div>
                        <img src={""} alt=""/>
                        <p>5 completados</p>
                    </div>
                </Profile.Footer>
            </Profile.Content>
        </Profile.Root>
    )
}

export const NoDescription: StoryObj<ProfileArgs>  = {
    argTypes: {

        description: { control: { disable: true } },
        image: { control: { disable: true } }
    },
    render: ({title}) =>(
        <Profile.Root>
            <Profile.Content>
                <Profile.Header>
                    <Links title={"GITHUB"} url={""}/>
                    <Links title={"GITHUB"} url={""}/>
                </Profile.Header>
                <Profile.Title title={title}/>
                <Profile.Footer>
                    <div>
                        <img src={""} alt=""/>
                        <p>5 completados</p>
                    </div>
                    <div>
                        <img src={""} alt=""/>
                        <p>5 completados</p>
                    </div>
                </Profile.Footer>
            </Profile.Content>
        </Profile.Root>
    )
}