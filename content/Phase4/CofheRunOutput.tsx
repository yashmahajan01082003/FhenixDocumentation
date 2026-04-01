import Section from "@/content/ComponentsForCode/Section";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function CofheRunOutput() {
    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>

            {/* RUN COMMAND */}
            <Section title="Run the App">
                <p className="text-sm text-gray-400 mb-3">
                    Start the development server:
                </p>

                <CodeSnippet code={`npm run dev`} />

                <p className="text-sm text-gray-400 mt-3">
                    Open in browser:
                </p>

                <CodeSnippet code={`http://localhost:5173`} />
            </Section>

            {/* OUTPUT */}
            <Section title="Output UI">
                <p className="text-sm text-gray-400 mb-4">
                    After running the app, you will see the following interface:
                </p>

                {/* Replace this with your actual image path */}
                <img
                    src="/output_image_project.png"
                    alt="App Output"
                    className="rounded-lg border border-gray-700"
                    width={800}
                    height={450}
                    style={{ borderRadius: "12px" }}
                />
            </Section>

        </div>
    );
}