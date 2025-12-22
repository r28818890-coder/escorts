import { 
  Building2, 
  Banknote, 
  FileText, 
  ShieldCheck, 
  Coins, 
  TrendingUp, 
  Award, 
  Users, 
  Calculator, 
  Briefcase, 
  Globe, 
  Info,
  CheckCircle,
  RefreshCcw,
  Stamp,
  Truck,
  Utensils,
  Scale,
  Sprout,
  Laptop,
  Palette,
  Bot,
  MessageCircle
} from 'lucide-react';
import { PageData } from './types';

const CodeIcon = Laptop; 
const LeafIcon = Sprout;

const createPage = (data: PageData): PageData => data;

export const PAGES_CONTENT: Record<string, PageData> = {
  'tax-exemption': createPage({
    id: 'tax-exemption',
    title: 'Tax Exemption for Startups',
    subtitle: 'Navigate taxes smartly and save costs with government-backed tax exemptions.',
    type: 'guide',
    heroGradient: 'from-blue-600 to-blue-400',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Why Tax Exemptions Are Crucial',
        content: 'For early-stage businesses, tax exemptions provide more than just savings—they fuel sustainable growth and innovation. By reducing the initial financial burden, governments allow startups to reinvest their earnings into core business activities.',
        listItems: [
          'Improved Cash Flow: Reduced tax obligations mean startups can allocate more funds for hiring and marketing.',
          'Investor Attraction: Startups with recognized tax benefits are more appealing to angel investors.',
          'Encouragement for Innovation: Tax relief on R&D gains enables startups to focus on creating solutions.'
        ],
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Types of Tax Exemptions',
        content: 'Explore various government-backed tax benefits designed specifically for startups in India. Understanding which category your business falls into can significantly optimize your financial planning.',
        listItems: [
          'Income Tax Holiday: 100% exemption on profits for 3 consecutive years.',
          'Capital Gains Tax Exemption: Benefit from capital gains tax exemption under Sections 54EE and 54GB.',
          'R&D Deductions: Startups engaged in research can claim additional deductions.',
          'Tax Benefits for Angel Investors: Investments eligible under Section 80-IAC.'
        ],
        icon: Calculator,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Eligibility Criteria',
        content: 'To benefit from tax exemptions, a business must meet strict requirements set by the DPIIT. Ensuring compliance with these is the first step towards claiming your benefits.',
        listItems: [
          'Be registered in India as a Private Limited Company, LLP, or Partnership.',
          'Have a scalable and innovative business model approved by DPIIT.',
          'Maintain proper financial records and audits.',
          'Annual turnover below INR 100 crore.',
          'Not formed by splitting up or reconstruction of an existing business.'
        ],
        icon: CheckCircle,
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'startup-certificate': createPage({
    id: 'startup-certificate',
    title: 'Startup India Certificate',
    subtitle: 'Get official government recognition for your innovative startup.',
    type: 'guide',
    heroGradient: 'from-indigo-600 to-blue-500',
    heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'What is it?',
        content: 'The Startup India Certificate is an official recognition provided by the Government of India under the Startup India Initiative. It is awarded to businesses that demonstrate innovation, scalability, and potential to contribute to economic growth.',
        icon: Award,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Key Advantages',
        content: 'Discover the powerful benefits that come with official Startup India recognition. From tax breaks to easier public procurement, the certificate opens many doors.',
        listItems: [
          'Tax Incentives: Eligible startups can claim tax benefits under government schemes.',
          'Funding Access: Easier eligibility for government-backed funds like SISFS.',
          'Enhanced Credibility: Official recognition strengthens trust with investors and clients.',
          'Regulatory Ease: Simplified compliance procedures and self-certification benefits.'
        ],
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Eligibility Criteria',
        content: 'To qualify for the Startup India Certificate, your business must meet specific requirements regarding its age, type, and turnover.',
        listItems: [
          'Incorporation Status: Must be a Pvt Ltd, LLP, or Partnership firm.',
          'Company Age: Should be less than 10 years from incorporation.',
          'Turnover Limit: Annual turnover should not exceed INR 100 crore.',
          'Innovation & Scalability: Must work towards development of new products/services.'
        ],
        icon: Users,
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'private-funding': createPage({
    id: 'private-funding',
    title: 'Private Funding Guide',
    subtitle: 'Unlock rapid growth for your startup with private funding. Access capital from venture capitalists and angel investors.',
    type: 'guide',
    heroGradient: 'from-blue-700 to-indigo-600',
    heroImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'What is Private Funding?',
        content: 'Private funding refers to capital investment from non-governmental sources such as angel investors, venture capital firms, private equity funds, and institutional investors. Unlike traditional bank loans, private funding often comes with strategic guidance and mentorship.',
        icon: Banknote,
        image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Who Can Apply?',
        content: 'Enterprises typically eligible for private funding include businesses that demonstrate high growth potential and a clear path to profitability.',
        listItems: [
          'Legal Structure: Registered as a Private Limited Company or LLP.',
          'Scalable Business Model: Demonstrates strong market potential.',
          'Operational Track Record: Operating for at least a minimum period.',
          'Documentation Ready: Provides well-prepared business plans and financials.'
        ],
        icon: Users,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Advantages',
        content: 'Discover why private funding is the preferred choice for ambitious entrepreneurs looking to scale rapidly.',
        listItems: [
          'Quick Capital Access: Receive substantial funding for expansion.',
          'Strategic Guidance: Investors often provide mentorship and industry expertise.',
          'Networking Opportunities: Access to investor networks.',
          'Flexible Terms: Terms can be customized based on specific needs.'
        ],
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1526304640152-d4619684e884?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'msme-funding': createPage({
    id: 'msme-funding',
    title: 'MSME Funding in India',
    subtitle: 'Unlock growth potential for your Micro, Small, or Medium Enterprise with specialized government funding.',
    type: 'guide',
    heroGradient: 'from-blue-500 to-cyan-500',
    heroImage: 'https://images.unsplash.com/photo-1565514020176-dbf2277f0d6e?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'What is MSME Funding?',
        content: 'MSME funding refers to financial assistance programs specifically designed for Micro, Small, and Medium Enterprises in India. These programs offer access to capital through loans, credit guarantees, and subsidies supported by government initiatives.',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Who Is Eligible?',
        content: 'Businesses that typically qualify for MSME funding range from small manufacturing units to service providers.',
        listItems: [
          'MSME Registration: Registered as a Micro, Small, or Medium Enterprise.',
          'Udyam Certificate: Holding a valid Udyam Registration certificate.',
          'Operational History: Operational for a minimum period.',
          'Financial Documentation: Maintaining organized financial records.'
        ],
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Benefits',
        content: 'Discover how MSME funding can transform your business operations by providing the necessary capital for upgrades.',
        listItems: [
          'Capital Availability: Access funds to acquire machinery and upgrade tech.',
          'Lower Cost Financing: Government-supported schemes offer reduced interest rates.',
          'Risk Coverage: Credit guarantee programs minimize lender risk.',
          'Business Growth: Enable scaling operations and entering new markets.'
        ],
        icon: Coins,
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'seed-fund': createPage({
    id: 'seed-fund',
    title: 'Startup India Seed Fund',
    subtitle: 'Financial assistance for proof of concept, prototype development, product trials, and market entry.',
    type: 'guide',
    heroGradient: 'from-green-600 to-teal-500',
    heroImage: 'https://images.unsplash.com/photo-1627634777217-c864268db30c?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Overview',
        content: 'The Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. This enables these startups to graduate to a level where they will be able to raise investments from angel investors or venture capitalists.',
        icon: Globe,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Eligibility Criteria',
        content: 'A startup, recognized by DPIIT, incorporated not more than 2 years ago at the time of application.',
        listItems: [
          'Must have a business idea to develop a product or a service with market fit.',
          'Ideally should use technology in its core product or service.',
          'Shareholding by Indian promoters in the startup should be at least 51%.',
          'Startup should not have received more than Rs 10 lakh of monetary support under any other Central or State Government scheme.'
        ],
        icon: CheckCircle,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'iso-certificate': createPage({
    id: 'iso-certificate',
    title: 'ISO Certification',
    subtitle: 'Establish international credibility and operational excellence with ISO standards.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'What is ISO Certification?',
        content: 'ISO certification validates that a management system, manufacturing process, service, or documentation procedure has all the requirements for standardization and quality assurance. It is a seal of approval from a third-party body that a company runs to one of the international standards developed and published by the International Organization for Standardization.',
        icon: Stamp,
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Benefits of ISO',
        content: 'Achieving ISO certification is more than a checklist—it is a transformation of your business culture.',
        listItems: [
          'Global Credibility: Recognized worldwide as a mark of quality.',
          'Operational Efficiency: Streamlined processes reduce waste and errors.',
          'Customer Trust: Demonstrates commitment to quality and safety.',
          'Tender Eligibility: Mandatory for many government and corporate tenders.'
        ],
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'iec-certificate': createPage({
    id: 'iec-certificate',
    title: 'Import Export Code (IEC)',
    subtitle: 'Your passport to global trade. Essential for all import and export business in India.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Why You Need IEC',
        content: 'The Import Export Code (IEC) is a 10-digit identification number issued by the DGFT (Director General of Foreign Trade). It is mandatory for every importer and exporter in India. Without IEC, no goods can be imported or exported, and you cannot avail benefits from the DGFT.',
        icon: Truck,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Documentation Required',
        content: 'The process is fully online and lifetime valid. We ensure your documentation is perfect for instant approval.',
        listItems: [
          'PAN Card of the individual or firm.',
          'Aadhar Card or Voter ID.',
          'Cancelled Cheque of the current bank account.',
          'Address Proof (Electricity Bill/Rent Agreement).'
        ],
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'msme-certificate': createPage({
    id: 'msme-certificate',
    title: 'MSME Registration',
    subtitle: 'Unlock exclusive government benefits with Udyam Registration for your enterprise.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Udyam Registration Explained',
        content: 'Micro, Small, and Medium Enterprises (MSME) registration, now known as Udyam Registration, is a government initiative to boost the growth of small businesses. It provides legal recognition and opens doors to subsidies and loans.',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Key Benefits',
        content: 'Registered MSMEs enjoy protection and incentives that unregistered businesses miss out on.',
        listItems: [
          'Collateral-free bank loans.',
          'Subsidy on Patent registration.',
          'Overdraft interest rate exemption.',
          'Protection against delayed payments.'
        ],
        icon: Award,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'fssai': createPage({
    id: 'fssai',
    title: 'FSSAI License',
    subtitle: 'Mandatory food safety license for all food business operators in India.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Food Safety Compliance',
        content: 'FSSAI Registration is mandatory for anyone involved in the food business, be it processing, manufacturing, packaging, distributing, or selling. It ensures that the food products undergo quality checks and curtail food adulteration.',
        icon: Utensils,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Types of Licenses',
        content: 'Depending on your turnover and scale, you need one of the following:',
        listItems: [
          'Basic Registration: For turnover less than ₹12 Lakhs.',
          'State License: For turnover between ₹12 Lakhs to ₹20 Crores.',
          'Central License: For turnover above ₹20 Crores or import/export.'
        ],
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'trademark': createPage({
    id: 'trademark',
    title: 'Trademark Registration',
    subtitle: 'Protect your brand identity, logo, and slogan from infringement.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Secure Your Brand',
        content: 'A trademark is a unique symbol or word used to represent a business or its products. Once registered, that same symbol or series of words cannot be used by any other organization, forever protecting your brand equity.',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Registration Process',
        content: 'We handle the entire lifecycle of trademark registration.',
        listItems: [
          'Trademark Search: Checking availability of your mark.',
          'Filing Application: Submitting forms to the registry.',
          'Examination: Responding to any objections.',
          'Publication & Certification: Final registration.'
        ],
        icon: CheckCircle,
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'legal-compliance': createPage({
    id: 'legal-compliance',
    title: 'Legal Compliance Services',
    subtitle: 'End-to-end legal support to keep your business compliant and penalty-free.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Comprehensive Legal Support',
        content: 'Running a business involves navigating a maze of laws and regulations. Our legal compliance services ensure you meet all statutory requirements, from annual filings to labor law compliance, letting you focus on growth.',
        icon: Scale,
        image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Our Services',
        content: 'We act as your extended legal department.',
        listItems: [
          'Annual ROC Filings & Compliance.',
          'Contract Drafting & Vetting.',
          'Labor Law Advisory.',
          'Dispute Resolution & Legal Notices.'
        ],
        icon: Briefcase,
        image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'seed-funding-consultancy': createPage({
    id: 'seed-funding-consultancy',
    title: 'Seed Funding Consultancy',
    subtitle: 'Expert guidance to secure early-stage capital for your startup.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Preparing for Seed Rounds',
        content: 'Seed funding is the first official money that a business venture raises. Our consultancy helps you prepare your pitch deck, value your company, and connect with the right angel investors and early-stage VCs.',
        icon: Sprout,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Our Approach',
        content: "We don't just introduce you to investors; we make you investor-ready.",
        listItems: [
          'Financial Modeling & Valuation.',
          'Pitch Deck refinement.',
          'Investor matching based on sector.',
          'Term Sheet negotiation.'
        ],
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'grant-funds': createPage({
    id: 'grant-funds',
    title: 'Government Grants',
    subtitle: 'Non-repayable funds to fuel your research, innovation, and social impact.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1565514020176-dbf2277f0d6e?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Unlock Free Capital',
        content: 'Grants are essentially free money provided by the government or organizations to support specific initiatives. Unlike loans, they do not need to be repaid, making them the most attractive form of funding for eligible startups.',
        icon: Banknote,
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Available Schemes',
        content: 'We help you identify and apply for suitable grant schemes.',
        listItems: [
          'Biotechnology Ignition Grant (BIG).',
          'NIDHI-PRAYAS for prototyping.',
          'Social Impact Grants.',
          'Export Promotion Grants.'
        ],
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'business-loan': createPage({
    id: 'business-loan',
    title: 'Business Loans',
    subtitle: 'Flexible financing solutions for working capital and expansion.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Fuel Your Operations',
        content: 'Whether you need to manage cash flow, purchase inventory, or expand to a new location, our business loan solutions connect you with top banks and NBFCs for the best rates.',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Types of Loans',
        content: 'Tailored financial products for every need.',
        listItems: [
          'Term Loans for capital expenditure.',
          'Working Capital Loans.',
          'Unsecured Business Loans.',
          'Equipment Financing.'
        ],
        icon: Coins,
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'project-loan': createPage({
    id: 'project-loan',
    title: 'Project Loans',
    subtitle: 'Long-term financing for infrastructure and industrial projects.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Large Scale Financing',
        content: 'Project loans are designed for setting up new industrial units or expanding existing ones. These are typically long-term loans secured against the assets of the project itself.',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Key Features',
        content: 'Structured specifically for capital-intensive projects.',
        listItems: [
          'Long repayment tenure (up to 10-15 years).',
          'Moratorium period during construction.',
          'Customized interest rates based on project viability.',
          'Detailed project report (DPR) assistance.'
        ],
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'cgtmse': createPage({
    id: 'cgtmse',
    title: 'CGTMSE Scheme',
    subtitle: 'Collateral-free loans for Micro and Small Enterprises up to ₹2 Crores.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Credit Guarantee Scheme',
        content: 'The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) was set up by the Government of India to make collateral-free credit available to the MSE sector. It provides a guarantee to lenders in case of default by the borrower.',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Scheme Benefits',
        content: 'Empowering entrepreneurs to dream big without asset worries.',
        listItems: [
          'No collateral or third-party guarantee required.',
          'Coverage up to ₹200 Lakhs (₹2 Crores).',
          'Guarantee cover up to 85% of the loan amount.',
          'Available for both new and existing enterprises.'
        ],
        icon: Award,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'mudra-loan': createPage({
    id: 'mudra-loan',
    title: 'Mudra Loan (PMMY)',
    subtitle: 'Funding the unfunded. Loans up to ₹10 Lakhs for non-corporate, non-farm small/micro enterprises.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Pradhan Mantri Mudra Yojana',
        content: 'PMMY is a scheme launched by the Hon\'ble Prime Minister to provide loans up to 10 lakh to non-corporate, non-farm small/micro enterprises. These loans are classified as MUDRA loans under PMMY.',
        icon: Coins,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Loan Categories',
        content: 'Three products available under PMMY to signify the stage of growth:',
        listItems: [
          'Shishu: Loans up to ₹50,000.',
          'Kishore: Loans from ₹50,000 to ₹5 Lakhs.',
          'Tarun: Loans from ₹5 Lakhs to ₹10 Lakhs.'
        ],
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'agricultural-loan': createPage({
    id: 'agricultural-loan',
    title: 'Agricultural Loan',
    subtitle: 'Dedicated financial support for farming, agri-business, and allied activities.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1625246333195-5840b95c0c7d?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Supporting the Backbone of Economy',
        content: 'Agricultural loans provide credit to farmers for seasonal agricultural operations, purchase of farm machinery, or setting up agri-businesses. These loans often come with low interest rates and flexible repayment terms.',
        icon: Sprout,
        image: 'https://images.unsplash.com/photo-1625246333195-5840b95c0c7d?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Types of Agri Loans',
        content: 'Covering every aspect of the agricultural value chain.',
        listItems: [
          'Kisan Credit Card (KCC) for short-term needs.',
          'Farm Mechanization Loans (Tractors/Harvesters).',
          'Agri-Gold Loans.',
          'Loans for Allied Activities (Dairy, Poultry, Fisheries).'
        ],
        icon: LeafIcon,
        image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'cgss': createPage({
    id: 'cgss',
    title: 'CGSS (Credit Guarantee for Startups)',
    subtitle: 'Enabling flow of credit to innovative startups without collateral.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Credit Guarantee Scheme for Startups',
        content: 'CGSS is designed to provide credit guarantees on loans extended to DPIIT-recognized startups by Scheduled Commercial Banks, NBFCs, and AIFs. It aims to encourage financial institutions to lend to startups.',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Why Apply?',
        content: 'Bridge the funding gap when you lack collateral but have a solid business model.',
        listItems: [
          'Guarantee cover up to ₹10 Crores per borrower.',
          'Transaction-based and Umbrella-based guarantee covers.',
          'Helps startups graduate from seed stage to growth stage.',
          'Reduces the risk perception of lenders.'
        ],
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'digital-marketing': createPage({
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Data-driven marketing strategies to skyrocket your brand visibility and ROI.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Growth Hacking Your Business',
        content: 'In the digital age, visibility is everything. Our comprehensive digital marketing services ensure your brand reaches the right audience at the right time. We combine creativity with analytics to deliver measurable results.',
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Services Included',
        content: 'A 360-degree approach to your online presence.',
        listItems: [
          'Search Engine Optimization (SEO).',
          'Social Media Marketing (SMM).',
          'Pay-Per-Click (PPC) Advertising.',
          'Content Marketing & Strategy.'
        ],
        icon: Laptop,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'website-development': createPage({
    id: 'website-development',
    title: 'Website Development',
    subtitle: 'High-performance, responsive, and stunning websites tailored to your brand.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Your Digital Storefront',
        content: 'Your website is often the first interaction a customer has with your brand. We build fast, secure, and user-friendly websites that convert visitors into customers. From corporate sites to e-commerce platforms, we do it all.',
        icon: Laptop,
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Tech Stack',
        content: 'We use the latest technologies to ensure longevity and performance.',
        listItems: [
          'Custom Design & UI/UX.',
          'Mobile Responsiveness.',
          'E-commerce Integration (Shopify/WooCommerce).',
          'SEO-Optimized Architecture.'
        ],
        icon: CodeIcon,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'logo-design': createPage({
    id: 'logo-design',
    title: 'Logo & Brand Identity',
    subtitle: 'Create a lasting impression with a unique and memorable brand identity.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b7993143a26?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'More Than Just a Logo',
        content: 'Branding is the soul of your business. Our design team works closely with you to create a visual identity that reflects your values, vision, and market positioning.',
        icon: Palette,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Deliverables',
        content: 'A complete branding package for your business.',
        listItems: [
          'Custom Logo Design Concepts.',
          'Brand Guidelines & Color Palette.',
          'Stationery Design (Business Cards, Letterheads).',
          'Social Media Kit.'
        ],
        icon: Award,
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'ai-services': createPage({
    id: 'ai-services',
    title: 'Artificial Intelligence Solutions',
    subtitle: 'Leverage the power of AI to automate, analyze, and accelerate your business.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Future-Proof Your Business',
        content: 'From chatbots to predictive analytics, our AI solutions help you stay ahead of the curve. We integrate cutting-edge AI technologies to optimize operations and enhance customer experiences.',
        icon: Bot,
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'AI Use Cases',
        content: 'Practical applications for modern businesses.',
        listItems: [
          'Customer Service Automation (Chatbots).',
          'Data Analysis & Predictive Insights.',
          'Process Automation.',
          'Personalized Marketing Engines.'
        ],
        icon: CheckCircle,
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'whatsapp-blue-tick': createPage({
    id: 'whatsapp-blue-tick',
    title: 'WhatsApp Business API & Blue Tick',
    subtitle: 'Build trust and engage customers with an official WhatsApp Business Verification.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1611605698383-ee9845284167?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Official Business Presence',
        content: 'The Green Tick (often called Blue Tick) on WhatsApp signifies an Official Business Account. It builds instant credibility and trust with your customers, increasing open rates and engagement.',
        icon: MessageCircle,
        image: 'https://images.unsplash.com/photo-1611605698383-ee9845284167?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Benefits & Features',
        content: 'Unlock the full potential of WhatsApp Marketing.',
        listItems: [
          'Verified Green Badge next to your name.',
          'Broadcast messages to unlimited users.',
          'Automated replies and chatbots.',
          'Integration with CRM tools.'
        ],
        icon: CheckCircle,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }),
  'terms': createPage({
    id: 'terms',
    title: 'Terms & Conditions',
    subtitle: 'Please read these terms carefully before proceeding.',
    type: 'legal',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Acceptance of Terms',
        sectionNumber: '01',
        icon: Coins,
        content: 'By using this website, you confirm that you have read, understood, and accepted these Terms & Conditions. If you do not agree, you should discontinue use of our site and services immediately.'
      },
      {
        title: 'Our Services',
        sectionNumber: '02',
        icon: Briefcase,
        content: [
          'Startup India Certification',
          'Business loans and financial assistance',
          'Government grants and funding opportunities',
          'Tax exemption and compliance guidance'
        ]
      },
      {
        title: 'Eligibility',
        sectionNumber: '03',
        icon: Users,
        content: [
          'Be at least 18 years old (or legal age as per your jurisdiction)',
          'Provide accurate and truthful information when engaging with our consultancy'
        ]
      },
      {
        title: 'Intellectual Property',
        sectionNumber: '04',
        icon: ShieldCheck,
        content: 'All content, branding, designs, and materials available on businessnesta.com are the property of Business Nesta, unless otherwise stated. You are permitted to view and use website content for personal purposes only.'
      }
    ]
  }),
  'refund': createPage({
    id: 'refund',
    title: 'Refund & Cancellation Policy',
    subtitle: 'This policy governs the terms under which refunds, cancellations, replacements, or service credits may be issued.',
    type: 'legal',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000',
    sections: [
      {
        title: 'Introduction',
        sectionNumber: '01',
        icon: Info,
        content: 'This Policy ensures clarity and transparency in service transactions while protecting the interests of both clients and Business Nesta.',
        subSections: [
          { title: 'Purpose', content: 'To ensure clarity in transactions.' },
          { title: 'Applicability', content: 'Applies to all services offered by Business Nesta including Startup registration and compliance services.' }
        ]
      },
      {
        title: 'Scope of the Policy',
        sectionNumber: '02',
        icon: FileText,
        content: 'This Policy applies to all payments made to Business Nesta via:',
        subSections: [
          { title: 'Online Payments', content: 'Cards, UPI, Wallets, Net Banking.' },
          { title: 'Bank Transfers', content: 'NEFT/IMPS/RTGS.' },
          { title: 'Services Covered', content: 'Startup incorporation, Legal drafting, Digital branding.' }
        ]
      },
      {
        title: 'Refund Eligibility',
        sectionNumber: '03',
        icon: RefreshCcw,
        content: [
          'Refunds may be issued under the following conditions:',
          'Non-Initiation of Service: Service not started within agreed timelines.',
          'Material Deficiency: Delivered service deviates significantly from scope.',
          'Technical/Transactional Errors: Duplicate or overpayments.'
        ]
      },
      {
        title: 'Authorized Payment Channels',
        sectionNumber: '04',
        icon: Banknote,
        content: [
          'All payments for services must be made exclusively to BusinessNesta LLP through authorized channels.',
          'Accepted payment methods include:',
          '• Bank Transfers: NEFT / IMPS / RTGS to the company’s current account.',
          '• Digital Wallets / Gateways: Razorpay, Cashfree.',
          'Important: Payments to personal accounts or under any name other than BusinessNesta LLP will not be recognized. Please ensure all transactions are made only through the official channels listed above.'
        ]
      }
    ]
  })
};


