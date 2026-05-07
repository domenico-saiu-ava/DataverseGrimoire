---
logical: "msdyn_propertyassetassociation"
display: "Associazione cespiti di proprietà"
entitySetName: "msdyn_propertyassetassociations"
primaryId: "msdyn_propertyassetassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione cespiti di proprietà

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertyassetassociation` |
| Display name | Associazione cespiti di proprietà |
| Display (plural) | Associazioni cespiti di proprietà |
| Schema name | `msdyn_propertyassetassociation` |
| Entity set (Web API) | `msdyn_propertyassetassociations` |
| Primary id attribute | `msdyn_propertyassetassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertyassetassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertyassetassociations(<guid>)
POST /api/data/v9.2/msdyn_propertyassetassociations
PATCH /api/data/v9.2/msdyn_propertyassetassociations(<guid>)
DELETE /api/data/v9.2/msdyn_propertyassetassociations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_customerasset`, `msdyn_name`, `msdyn_property`, `msdyn_propertyassetassociationid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_propertyassetassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertyassetassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertyassetassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertyassetassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_propertyassetassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_propertyassetassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_propertyassetassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_propertyassetassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_customerasset_msdyn_propertyassetassociation_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_property_msdyn_propertyassetassociation_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertyassetassociation_SyncErrors` | [msdyn_propertyassetassociation](msdyn_propertyassetassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertyassetassociation` |
| `msdyn_propertyassetassociation_AsyncOperations` | [msdyn_propertyassetassociation](msdyn_propertyassetassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertyassetassociation` |
| `msdyn_propertyassetassociation_MailboxTrackingFolders` | [msdyn_propertyassetassociation](msdyn_propertyassetassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertyassetassociation` |
| `msdyn_propertyassetassociation_UserEntityInstanceDatas` | [msdyn_propertyassetassociation](msdyn_propertyassetassociation.md) | `objectid` | `objectid_msdyn_propertyassetassociation` |
| `msdyn_propertyassetassociation_ProcessSession` | [msdyn_propertyassetassociation](msdyn_propertyassetassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertyassetassociation` |
| `msdyn_propertyassetassociation_BulkDeleteFailures` | [msdyn_propertyassetassociation](msdyn_propertyassetassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertyassetassociation` |
| `msdyn_propertyassetassociation_PrincipalObjectAttributeAccesses` | [msdyn_propertyassetassociation](msdyn_propertyassetassociation.md) | `objectid` | `objectid_msdyn_propertyassetassociation` |


## Source

Generated from [msdyn_propertyassetassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_propertyassetassociation')) on 2026-05-07.