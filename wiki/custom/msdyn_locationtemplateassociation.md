---
logical: "msdyn_locationtemplateassociation"
display: "Associazione modello ubicazione"
entitySetName: "msdyn_locationtemplateassociations"
primaryId: "msdyn_locationtemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione modello ubicazione

Acquisisce la relazione tra un modello di proprietà, che a sua volta acquisisce un set di proprietà e un'unità funzionale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_locationtemplateassociation` |
| Display name | Associazione modello ubicazione |
| Display (plural) | Associazioni modello ubicazione |
| Schema name | `msdyn_locationtemplateassociation` |
| Entity set (Web API) | `msdyn_locationtemplateassociations` |
| Primary id attribute | `msdyn_locationtemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_locationtemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_locationtemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_locationtemplateassociations
PATCH /api/data/v9.2/msdyn_locationtemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_locationtemplateassociations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_functionallocation`, `msdyn_locationtemplateassociationid`, `msdyn_name`, `msdyn_propertytemplate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_locationtemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_locationtemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_locationtemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_locationtemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_locationtemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_locationtemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_locationtemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_locationtemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_functionallocation_msdyn_locationtemplateassociation_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_templateforproperties_msdyn_locationtemplateassociation_PropertyTemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_PropertyTemplate` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_locationtemplateassociation_SyncErrors` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_DuplicateMatchingRecord` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_DuplicateBaseRecord` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `baserecordid` | `baserecordid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_AsyncOperations` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_MailboxTrackingFolders` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_UserEntityInstanceDatas` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `objectid` | `objectid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_ProcessSession` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_BulkDeleteFailures` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtemplateassociation` |
| `msdyn_locationtemplateassociation_PrincipalObjectAttributeAccesses` | [msdyn_locationtemplateassociation](msdyn_locationtemplateassociation.md) | `objectid` | `objectid_msdyn_locationtemplateassociation` |


## Source

Generated from [msdyn_locationtemplateassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_locationtemplateassociation')) on 2026-05-07.