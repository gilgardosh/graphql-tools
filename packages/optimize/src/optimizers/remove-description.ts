import { visit } from 'graphql';
import { DocumentOptimizer } from '../types';

/**
 * This optimizer removes "desciption" field from schema AST definitions.
 * @param input
 */
export const removeDescriptions: DocumentOptimizer = input => {
  function transformNode(node: any) {
    if (node.description) {
      node.description = undefined;
    }

    return node;
  }

  return visit(input, {
    ScalarTypeDefinition: transformNode,
    ObjectTypeDefinition: transformNode,
    InterfaceTypeDefinition: transformNode,
    UnionTypeDefinition: transformNode,
    EnumTypeDefinition: transformNode,
    EnumValueDefinition: transformNode,
    InputObjectTypeDefinition: transformNode,
    InputValueDefinition: transformNode,
    FieldDefinition: transformNode,
  });
};
