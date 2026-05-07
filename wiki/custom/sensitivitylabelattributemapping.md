---
logical: "sensitivitylabelattributemapping"
display: "Sensitivity Label Attribute Mapping"
entitySetName: "sensitivitylabelattributemappings"
primaryId: "sensitivitylabelattributemappingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sensitivity Label Attribute Mapping

Sensitivity Label Attribute Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sensitivitylabelattributemapping` |
| Display name | Sensitivity Label Attribute Mapping |
| Display (plural) | Sensitivity Label Attribute Mappings |
| Schema name | `sensitivitylabelattributemapping` |
| Entity set (Web API) | `sensitivitylabelattributemappings` |
| Primary id attribute | `sensitivitylabelattributemappingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sensitivitylabelattributemappings?$select=name&$top=10
GET /api/data/v9.2/sensitivitylabelattributemappings(<guid>)
POST /api/data/v9.2/sensitivitylabelattributemappings
PATCH /api/data/v9.2/sensitivitylabelattributemappings(<guid>)
DELETE /api/data/v9.2/sensitivitylabelattributemappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`attributeid`, `entityid`, `importsequencenumber`, `iscustomizable`, `labelid`, `name`, `overriddencreatedon`, `sensitivitylabelattributemappingid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sensitivitylabelattributemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sensitivitylabelattributemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sensitivitylabelattributemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sensitivitylabelattributemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sensitivitylabelattributemapping` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sensitivitylabelattributemapping_sensitivitylabel` | [sensitivitylabel](sensitivitylabel.md) | `labelid` | `LabelId` |
| `attribute_sensitivitylabelattributemapping_AttributeId` | [attribute](attribute.md) | `attributeid` | `AttributeId` |
| `entity_sensitivitylabelattributemapping_EntityId` | [entity](entity.md) | `entityid` | `EntityId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sensitivitylabelattributemapping_SyncErrors` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_DuplicateMatchingRecord` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `duplicaterecordid` | `duplicaterecordid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_DuplicateBaseRecord` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `baserecordid` | `baserecordid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_AsyncOperations` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_MailboxTrackingFolders` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_UserEntityInstanceDatas` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `objectid` | `objectid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_ProcessSession` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_BulkDeleteFailures` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_PrincipalObjectAttributeAccesses` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `objectid` | `objectid_sensitivitylabelattributemapping` |


## Source

Generated from [sensitivitylabelattributemapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sensitivitylabelattributemapping')) on 2026-05-07.