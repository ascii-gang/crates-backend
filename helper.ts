import { api } from "./deps.ts";

const find = async (name: string) => {
  if (name.length != 0) {
    let query = await api.search(`${name}`);
    let result: any = [];
    for (let crate of query.crates) {
      let crateTemplate = {
        id: crate["id"],
        title: crate["name"],
        description: crate["description"],
        version: crate["newest_version"],
        url: crate["documentation"],
        links: crate["links"],
        downloads: crate["downloads"],
        stable_version: crate["max_stable_version"],
        repo: crate["repository"],
      };

      result.push(crateTemplate);
    }

    return result;
  } else {
    throw new Error("Package name should not be empty!");
  }
};

export default find;
