import { useQuery } from "@tanstack/react-query";

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  homepage: string | null;
}

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: ['github-repos', username],
    queryFn: async (): Promise<GithubRepo[]> => {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      
      const data = await response.json();
      
      // Filter out forks and sort by stars as secondary sort
      return data
        .filter((repo: any) => !repo.fork)
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
}
