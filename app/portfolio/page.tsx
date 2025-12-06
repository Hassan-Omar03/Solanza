'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, ShoppingCart, Building, Utensils, Home, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'TechStart E-commerce Platform',
      category: 'ecommerce',
      description: 'Complete e-commerce solution with 10,000+ products',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      tags: ['E-commerce', 'Web Development', 'SEO'],
      icon: ShoppingCart,
      results: ['300% increase in sales', '50% faster load time', '98% customer satisfaction'],
    },
    {
      title: 'GlobalCorp Corporate Website',
      category: 'corporate',
      description: 'Enterprise-level corporate website with multi-language support',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tags: ['Corporate', 'Multi-language', 'CMS'],
      icon: Building,
      results: ['45% more leads', 'Reduced bounce rate by 60%', '8 languages supported'],
    },
    {
      title: 'Restaurant Chain Ordering System',
      category: 'restaurant',
      description: 'Online ordering system for multi-location restaurant chain',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      tags: ['Online Ordering', 'Payment Integration', 'Mobile App'],
      icon: Utensils,
      results: ['1000+ daily orders', '40% increase in revenue', '4.9-star rating'],
    },
    {
      title: 'Luxury Real Estate Platform',
      category: 'realestate',
      description: 'Premium real estate website with virtual tours',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      tags: ['Real Estate', 'Virtual Tours', 'Lead Generation'],
      icon: Home,
      results: ['500+ property listings', '80% lead conversion', 'VR tour integration'],
    },
    {
      title: 'SaaS Company Marketing Campaign',
      category: 'marketing',
      description: 'Complete digital marketing strategy and execution',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['Digital Marketing', 'Google Ads', 'Social Media'],
      icon: TrendingUp,
      results: ['500% ROI', '10,000+ new users', '250% engagement increase'],
    },
    {
      title: 'Fashion Brand Rebranding',
      category: 'branding',
      description: 'Complete brand transformation and identity redesign',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      tags: ['Branding', 'Graphic Design', 'Brand Strategy'],
      icon: Award,
      results: ['Brand recognition +200%', 'New logo, 50+ assets', 'Award-winning design'],
    },
    {
      title: 'Healthcare Booking System',
      category: 'healthcare',
      description: 'Advanced appointment booking and patient management',
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
      tags: ['Booking System', 'Healthcare', 'CRM'],
      icon: Building,
      results: ['5000+ appointments/month', 'No-show rate reduced 70%', 'HIPAA compliant'],
    },
    {
      title: 'Fitness Chain Mobile App',
      category: 'mobile',
      description: 'Cross-platform mobile app for gym management',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tags: ['Mobile App', 'Fitness', 'Membership'],
      icon: TrendingUp,
      results: ['50,000+ downloads', '4.8-star rating', '70% retention rate'],
    },
    {
      title: 'Marketplace Platform',
      category: 'marketplace',
      description: 'Multi-vendor marketplace with 500+ sellers',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      tags: ['Marketplace', 'Multi-vendor', 'Payments'],
      icon: ShoppingCart,
      results: ['500+ active vendors', '$2M+ monthly GMV', '100,000+ products'],
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'branding', label: 'Branding' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our successful projects and the results we've delivered for clients
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setFilter(category.value)}
                variant={filter === category.value ? 'default' : 'outline'}
                className={filter === category.value ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-blue-200 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <project.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Results:</h4>
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-gray-600 mb-6">
                Every project we undertake is a partnership. We work closely with our clients to understand their goals, challenges, and vision. The results speak for themselves.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Average 250% increase in conversions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">98% client satisfaction rate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Projects delivered on time and on budget</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-gray-600 text-sm">Industry Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-gray-600 text-sm">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's create something amazing together
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
