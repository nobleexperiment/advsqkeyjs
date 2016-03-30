# advsqkeyjs

I used to work as a web developer at a previous startup using their in-house proprietary content management system for Financial Advisors. It was built in ASP (legacy version, not the .net platform) on MySQL as it's database on Windows Servers. It was great for what it did. It rendered HTML pages on a template library with widgets. The problem with that CMS, we designed it to be advantageous for internet explorer browsers. The lack of foresight to foresee browser trends shift to mozilla-based browsers and browsers that render on webkit caused our hosted content and websites to look wonky.

Nonethless, That application stood the test of time for a good 18+ years (I think it's still in use). Since I'm no longer involved with that startup, I wanted to build a lightweight open source program for Financial Adivsors to host on a virtual machine.

I'm replicating AdvisorSquare in a lightweight JS application as a hobby project. The CRM is based on keystone.js engine utilizing eclipse.js and node.js. This imagines the question: How would AdvisorSquare's CMS be retooled in a MEAN stack with keystone.js. Instead of using widgets, web designers and developers working with financial advisors can use any NPM dependencies. Those dependencies can be from the NPM package manager or proprietary for broker/dealer use only.

In my free time, I'm hoping this would help financial advisors build their own reactive websites as brochures for their existing and prospective clients with the help of contributors like you. It's designed to be simple, cost-effective on any hosting platform (AWS, Google Cloud, etc.) and compliant to any financial regulatory agencies (like FINRA, FSC, FCA, and other regulatory agencies serving Broker/Dealers worldwide).

Keys:

1. Broker / Dealers, Registered Financial Advisors, and Investment Advisors should host their own web platforms with a Platform as a Service provider using Virtual Machines or if you're using Amazon Web Services, EC2 instances.

2. Compliance Departments look for content discrepancies from their agents or reps if it's not compliant with FINRA or their own Broker/Dealer guidelines. I'm looking to build a content search bot crawler that would scan for these discrepancies regardless of where their content is hosted.

3. The majority of Financial Services still use the .net platform as their base of operations. Most JS platforms should be compatible with .net to fit in their existing IT infrastructure.

# advsqkeyjs
