import { fetchAPI } from "../utils/api";

export async function getStory() {
    const story = await fetchAPI(`/story`);
    return story;
}
