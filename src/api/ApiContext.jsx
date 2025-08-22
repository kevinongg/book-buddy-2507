import { createContext, useContext, useState } from "react";
import { useAuth } from "../auth/AuthContext";

export const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const { token } = useAuth();
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const request = async (resource, options) => {
    const response = await fetch(API + resource, {
      ...options,
      headers,
    });

    // if (options.method !== "DELETE") {
    //   return await response.json()
    // } else {
    //   return undefined
    // }
    const isJson = /json/.test(response.headers.get("Content-Type"));
    const result = isJson ? await response.json() : undefined;
    if (!response.ok) throw Error(result.message ?? "Something went wrong :(");
    return result;
  };

  const [tags, setTags] = useState({});

  /** Stores the provided query function for a given tag */
  const provideTag = (tag, query) => {
    setTags({ ...tags, [tag]: query });
  };

  /** Calls all query functions associated with the given tags */
  const invalidateTags = (tagsToInvalidate) => {
    tagsToInvalidate.forEach((tag) => {
      const query = tags[tag];
      if (query) query();
    });
  };

  const value = { request, provideTag, invalidateTags };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) throw Error("useApi must be used within ApiProvider");
  return context;
};
