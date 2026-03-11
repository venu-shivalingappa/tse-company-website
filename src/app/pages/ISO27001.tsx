import { Link } from 'react-router';
import { Shield, FileCheck, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ISO27001() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto mb-6 text-blue-600" size={64} />
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">ISO/IEC 27001 Security Framework</h1>
            <p className="text-xl text-gray-600">Building secure organizations through strong information security governance.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What is ISO/IEC 27001?</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>ISO/IEC 27001 is an internationally recognized standard for managing information security risks through structured governance frameworks.</p>
              <p>The standard provides a systematic approach to managing sensitive company information, ensuring it remains secure through people, processes, and technology controls.</p>
              <p>Organizations implementing ISO 27001 demonstrate their commitment to information security best practices and regulatory compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Organizations Need ISO 27001</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">TSE Security Capabilities</h2>
            <p className="text-lg text-gray-600 mb-12">Tech Solve Engine supports organizations implementing security governance aligned with ISO 27001 principles.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{capability.title}</h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Certification Pathway</h2>
            <div className="bg-blue-700 p-8 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-lg mb-4">Tech Solve Engine has applied for accreditation with the National Accreditation Board for Certification Bodies (NABCB) to operate as an ISO/IEC 27001 certification body in India.</p>
                  <p className="font-semibold">Certification services will be offered subject to accreditation approval.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Our Advisory Services</h3>
              <p className="text-lg text-blue-100">While certification services are pending accreditation, we currently provide comprehensive advisory support including:</p>
              <ul className="space-y-3">
                {advisoryServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="flex-shrink-0 mt-1" size={20} />
                    <span className="text-blue-100">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Strengthen Your Security Posture</h2>
          <p className="text-xl text-gray-600 mb-10">Let's discuss how ISO 27001 frameworks can enhance your organization's security governance.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            Talk to Our Security Experts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  { icon: Shield, title: 'Enhanced Security Posture', description: 'Systematic approach to identifying and managing information security risks across your organization.' },
  { icon: CheckCircle2, title: 'Regulatory Compliance', description: 'Meet regulatory requirements and demonstrate compliance to stakeholders and clients.' },
  { icon: FileCheck, title: 'Business Credibility', description: 'ISO 27001 certification demonstrates commitment to security best practices to customers and partners.' },
  { icon: AlertCircle, title: 'Risk Management', description: 'Structured framework for identifying, assessing, and mitigating information security risks.' }
];

const capabilities = [
  { title: 'Security Architecture Design', description: 'Building secure technology environments aligned with ISO 27001 controls and requirements.' },
  { title: 'Risk Management Frameworks', description: 'Implementing systematic risk assessment and treatment processes.' },
  { title: 'Compliance Readiness', description: 'Preparing organizations for ISO 27001 certification audits and assessments.' },
  { title: 'Governance Structure Implementation', description: 'Establishing information security governance, roles, and responsibilities.' },
  { title: 'Policy Development', description: 'Creating comprehensive security policies and procedures aligned with the standard.' },
  { title: 'Continuous Improvement', description: 'Supporting ongoing security management and continuous improvement processes.' }
];

const advisoryServices = [
  'Gap analysis against ISO 27001 requirements',
  'Security policy and procedure development',
  'Risk assessment and treatment planning',
  'Security control implementation guidance',
  'Internal audit preparation',
  'Management system documentation',
  'Staff training and awareness programs',
  'Pre-certification readiness assessment'
];
