---
logical: "msdyn_similarentitiesfeatureimportance"
display: "Importanza funzionalità entità simili"
entitySetName: "msdyn_similarentitiesfeatureimportances"
primaryId: "msdyn_similarentitiesfeatureimportanceid"
primaryName: "msdyn_entitytype"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Importanza funzionalità entità simili

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_similarentitiesfeatureimportance` |
| Display name | Importanza funzionalità entità simili |
| Display (plural) | msdyn_similarentitiesfeatureimportances |
| Schema name | `msdyn_similarentitiesfeatureimportance` |
| Entity set (Web API) | `msdyn_similarentitiesfeatureimportances` |
| Primary id attribute | `msdyn_similarentitiesfeatureimportanceid` |
| Primary name attribute | `msdyn_entitytype` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_similarentitiesfeatureimportances?$select=msdyn_entitytype&$top=10
GET /api/data/v9.2/msdyn_similarentitiesfeatureimportances(<guid>)
POST /api/data/v9.2/msdyn_similarentitiesfeatureimportances
PATCH /api/data/v9.2/msdyn_similarentitiesfeatureimportances(<guid>)
DELETE /api/data/v9.2/msdyn_similarentitiesfeatureimportances(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_entitytype`, `msdyn_featureimportance`, `msdyn_similarentitiesfeatureimportanceid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_similarentitiesfeatureimportance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_similarentitiesfeatureimportance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_similarentitiesfeatureimportance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_similarentitiesfeatureimportance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_similarentitiesfeatureimportance` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_similarentitiesfeatureimportance_SyncErrors` | [msdyn_similarentitiesfeatureimportance](msdyn_similarentitiesfeatureimportance.md) | `regardingobjectid` | `regardingobjectid_msdyn_similarentitiesfeatureimportance` |
| `msdyn_similarentitiesfeatureimportance_AsyncOperations` | [msdyn_similarentitiesfeatureimportance](msdyn_similarentitiesfeatureimportance.md) | `regardingobjectid` | `regardingobjectid_msdyn_similarentitiesfeatureimportance` |
| `msdyn_similarentitiesfeatureimportance_MailboxTrackingFolders` | [msdyn_similarentitiesfeatureimportance](msdyn_similarentitiesfeatureimportance.md) | `regardingobjectid` | `regardingobjectid_msdyn_similarentitiesfeatureimportance` |
| `msdyn_similarentitiesfeatureimportance_UserEntityInstanceDatas` | [msdyn_similarentitiesfeatureimportance](msdyn_similarentitiesfeatureimportance.md) | `objectid` | `objectid_msdyn_similarentitiesfeatureimportance` |
| `msdyn_similarentitiesfeatureimportance_ProcessSession` | [msdyn_similarentitiesfeatureimportance](msdyn_similarentitiesfeatureimportance.md) | `regardingobjectid` | `regardingobjectid_msdyn_similarentitiesfeatureimportance` |
| `msdyn_similarentitiesfeatureimportance_BulkDeleteFailures` | [msdyn_similarentitiesfeatureimportance](msdyn_similarentitiesfeatureimportance.md) | `regardingobjectid` | `regardingobjectid_msdyn_similarentitiesfeatureimportance` |
| `msdyn_similarentitiesfeatureimportance_PrincipalObjectAttributeAccesses` | [msdyn_similarentitiesfeatureimportance](msdyn_similarentitiesfeatureimportance.md) | `objectid` | `objectid_msdyn_similarentitiesfeatureimportance` |


## Source

Generated from [msdyn_similarentitiesfeatureimportance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_similarentitiesfeatureimportance')) on 2026-05-07.