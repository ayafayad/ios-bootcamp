/**
 * @author Ahmed Serag
 * @date 2019-01-23
 * @description declaration of Tree data.
 * @filename tree.ts
 */


import { Node } from "interfaces/node";
import { Children } from "react";

export const TREE: Node = {
  title: "WEEK 1 - SWIFT LANGUAGE BASICS & MEMORY MANAGEMENT",
  isVisible: true,
  children: [
    {
      title: "Building your own types",
      isVisible: false,
      children: [
        {
          title: "Tackling Advanced Topics",
          isVisible: false,
        },
        {
          title: "Tackling Advanced Topics",
          isVisible: false,
        },
        {
          title: "Tackling Advanced Topics",
          isVisible: false,
          children: [
            {
              title: "Bmbmbmbbm",
              isVisible: false,
              children: [
                {
                  title: "Building your own types",
                  isVisible: false,
                  children: [
                    {
                      title: "Tackling Advanced Topics",
                      isVisible: false,
                    },
                    {
                      title: "Tackling Advanced Topics",
                      isVisible: false,
                    },
                    {
                      title: "Tackling Advanced Topics",
                      isVisible: false,
                      children: [
                        {
                          title: "Tackling Advanced Topics",
                          isVisible: false,
                        },
                        {
                          title: "Tackling Advanced Topics",
                          isVisible: false,
                        },
                        {
                          title: "Tackling Advanced Topics",
                          isVisible: false,
                        }
                      ]
                    },
                    {
                      title: "Tackling Advanced Topics",
                      isVisible: false,
                      
                    }
                  ]
                }
              ]
            },
            {
              title: "Tackling Advanced Topics",
              isVisible: false,
            },
            {
              title: "Tackling Advanced Topics",
              isVisible: false,
            }
          ]
        },
        {
          title: "Tackling Advanced Topics",
          isVisible: false,
          
        }
      ]
    },
    {
      title: "Tackling Advanced Topics",
      isVisible: false,
      children: []
    },
    {
      title: "Memory Management",
      isVisible: false,
      children: [
        {
          title: "Memory Management",
          isVisible: false
        }
      ]
    }
  ]
};