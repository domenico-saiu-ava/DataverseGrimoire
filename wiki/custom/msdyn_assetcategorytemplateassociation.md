---
logical: "msdyn_assetcategorytemplateassociation"
display: "Associazione modelli di categoria cespiti"
entitySetName: "msdyn_assetcategorytemplateassociations"
primaryId: "msdyn_assetcategorytemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione modelli di categoria cespiti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assetcategorytemplateassociation` |
| Display name | Associazione modelli di categoria cespiti |
| Display (plural) | Associazioni modelli di categoria cespiti |
| Schema name | `msdyn_assetcategorytemplateassociation` |
| Entity set (Web API) | `msdyn_assetcategorytemplateassociations` |
| Primary id attribute | `msdyn_assetcategorytemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assetcategorytemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assetcategorytemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_assetcategorytemplateassociations
PATCH /api/data/v9.2/msdyn_assetcategorytemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_assetcategorytemplateassociations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assetcategorytemplateassociationid`, `msdyn_customerassetcategory`, `msdyn_name`, `msdyn_propertytemplate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_assetcategorytemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assetcategorytemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assetcategorytemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assetcategorytemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_assetcategorytemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_assetcategorytemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_assetcategorytemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_assetcategorytemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_customerassetcategory_msdyn_assetcategorytemplateassociation_customerassetproperty` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `msdyn_customerassetcategory` | `msdyn_customerassetcategory` |
| `msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assetcategorytemplateassociation_SyncErrors` | [msdyn_assetcategorytemplateassociation](msdyn_assetcategorytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assetcategorytemplateassociation` |
| `msdyn_assetcategorytemplateassociation_AsyncOperations` | [msdyn_assetcategorytemplateassociation](msdyn_assetcategorytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assetcategorytemplateassociation` |
| `msdyn_assetcategorytemplateassociation_MailboxTrackingFolders` | [msdyn_assetcategorytemplateassociation](msdyn_assetcategorytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assetcategorytemplateassociation` |
| `msdyn_assetcategorytemplateassociation_UserEntityInstanceDatas` | [msdyn_assetcategorytemplateassociation](msdyn_assetcategorytemplateassociation.md) | `objectid` | `objectid_msdyn_assetcategorytemplateassociation` |
| `msdyn_assetcategorytemplateassociation_ProcessSession` | [msdyn_assetcategorytemplateassociation](msdyn_assetcategorytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assetcategorytemplateassociation` |
| `msdyn_assetcategorytemplateassociation_BulkDeleteFailures` | [msdyn_assetcategorytemplateassociation](msdyn_assetcategorytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_assetcategorytemplateassociation` |
| `msdyn_assetcategorytemplateassociation_PrincipalObjectAttributeAccesses` | [msdyn_assetcategorytemplateassociation](msdyn_assetcategorytemplateassociation.md) | `objectid` | `objectid_msdyn_assetcategorytemplateassociation` |


## Source

Generated from [msdyn_assetcategorytemplateassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_assetcategorytemplateassociation')) on 2026-05-07.