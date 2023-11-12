import { IFacebookPost } from "../types/IFacebookPost";

const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

export async function fetchFacebookFeed(): Promise<IFacebookPost[]> {
  try {
    const res = await fetch(
      `https://graph.facebook.com/v18.0/${PAGE_ID}/feed?&access_token=${ACCESS_TOKEN}`
    );
    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(
        `Error fetching Facebook feed: ${
          data.error?.message || "Unknown error"
        }`
      );
    }

    return data.data as IFacebookPost[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
