import './Legal.css';

export default function Legal() {
    return (
        <div className="legal-page">
            <div className="legal-container">

                <h1>Legal Notice & Privacy Policy</h1>
                <span className="last-updated">Last updated: September 2026</span>

                <div className="legal-card">
                    <h2>1. Legal Notice & Hosting</h2>
                    
                    <h3>Publisher</h3>
                    <ul>
                        <li><strong>Name:</strong> Ewan Baverel</li>
                        <li><strong>Contact:</strong> contactwanspace@gmail.com</li>
                    </ul>

                    <h3>Hosting</h3>
                    <ul>
                        <li><strong>Company:</strong> Vercel Inc.</li>
                        <li><strong>Address:</strong> 440 N Barranca Avenue #4133, Covina, CA 91723, USA</li>
                        <li><strong>Website:</strong> https://vercel.com</li>
                    </ul>
                </div>

                <div className="legal-card">
                    <h2>2. Licensing & Copyright</h2>
                    <p>This website operates under an MIT license, which allows for free use, modification, and distribution of the source code, provided that the original copyright and license notice are preserved.</p>
                </div>

                <div className="legal-card">
                    <h2>3. Privacy Policy</h2>
                    
                    <h3>Data Collection & Purpose</h3>
                    <p>No data is collected except for the bare minimum required for the website to function.</p>

                    <h3>Data Storage & Retention</h3>
                    <p>No data is stored persistently.</p>

                    <h3>User Rights</h3>
                    <p>Users have the right to access, modify, or delete any personal data they may have provided. However, since no personal data is collected, these rights are not applicable.</p>

                    <h3>Third-Party Services</h3>
                    <p>The website uses third-party services for hosting and analytics. These services may collect data according to their own privacy policies. Users are encouraged to review the privacy policies of these third-party services.</p>

                    <h3>Cookies</h3>
                    <p>This website does not use any tracking cookies.</p>
                </div>

                <div className="legal-card">
                    <h2>4. Terms of Service & Intellectual Property</h2>
                    
                    <h3>Disclaimer of Warranties</h3>
                    <p>The website is provided "as is". The publisher does not guarantee 100% server uptime or absolute data preservation. Use of the service is at your own risk.</p>

                    <h3>User Responsibility</h3>
                    <p>We reject all liability regarding external links (URLs).</p>

                    <h3>Intellectual Property</h3>
                    <p>While the underlying source code is licensed under the MIT License, all original content including text, branding, and projects (such as "The Last Good Earth" and "Akasha") remains the exclusive intellectual property of the publisher. Unauthorized use, reproduction, or distribution of these specific assets is strictly prohibited.</p>
                </div>
            </div>
        </div>
    )
}