---
logical: "msdyn_assettemplateassociation"
display: "Associazione modelli di cespite"
entitySetName: "msdyn_assettemplateassociations"
primaryId: "msdyn_assettemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione modelli di cespite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assettemplateassociation` |
| Display name | Associazione modelli di cespite |
| Display (plural) | Associazioni modelli di cespiti |
| Schema name | `msdyn_assettemplateassociation` |
| Entity set (Web API) | `msdyn_assettemplateassociations` |
| Primary id attribute | `msdyn_assettemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assettemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assettemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_assettemplateassociations
PATCH /api/data/v9.2/msdyn_assettemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_assettemplateassociations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assettemplateassociationid`, `msdyn_customerasset`, `msdyn_name`, `msdyn_propertytemplate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_assettemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assettemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assettemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assettemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_assettemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_assettemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_assettemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_assettemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_customerasset_msdyn_assettemplateassociation_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assettemplateassociation_SyncErrors` | [msdyn_assettemplateassociation](msdyn_assettemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assettemplateassociation` |
| `msdyn_assettemplateassociation_AsyncOperations` | [msdyn_assettemplateassociation](msdyn_assettemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assettemplateassociation` |
| `msdyn_assettemplateassociation_MailboxTrackingFolders` | [msdyn_assettemplateassociation](msdyn_assettemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assettemplateassociation` |
| `msdyn_assettemplateassociation_UserEntityInstanceDatas` | [msdyn_assettemplateassociation](msdyn_assettemplateassociation.md) | `objectid` | `objectid_msdyn_assettemplateassociation` |
| `msdyn_assettemplateassociation_ProcessSession` | [msdyn_assettemplateassociation](msdyn_assettemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assettemplateassociation` |
| `msdyn_assettemplateassociation_BulkDeleteFailures` | [msdyn_assettemplateassociation](msdyn_assettemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assettemplateassociation` |
| `msdyn_assettemplateassociation_PrincipalObjectAttributeAccesses` | [msdyn_assettemplateassociation](msdyn_assettemplateassociation.md) | `objectid` | `objectid_msdyn_assettemplateassociation` |


## Source

Generated from [msdyn_assettemplateassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_assettemplateassociation')) on 2026-05-07.