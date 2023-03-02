import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
    const repository = {
        full_name: "octocat/Hello-World",
        language: "JavaScript",
        description: "This your first repo!",
        owner: "Facebook",
        name: "react",
        html_url: "https://github.com/facebook/react",
    };

        
    render(
        <MemoryRouter>

        render(<RepositoriesListItem repository={repository} />)
    </MemoryRouter>
    );
   
}

test("displays the repository name", () => {
   renderComponent();
         
   // const name = screen.getByText("Hello-World");
    //expect(name).toBeInTheDocument();
});     