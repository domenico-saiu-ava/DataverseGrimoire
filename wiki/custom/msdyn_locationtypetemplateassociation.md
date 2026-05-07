---
logical: "msdyn_locationtypetemplateassociation"
display: "Associazione modelli tipo di unità funzionale"
entitySetName: "msdyn_locationtypetemplateassociations"
primaryId: "msdyn_locationtypetemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione modelli tipo di unità funzionale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_locationtypetemplateassociation` |
| Display name | Associazione modelli tipo di unità funzionale |
| Display (plural) | Associazione modelli tipo di unità funzionale |
| Schema name | `msdyn_locationtypetemplateassociation` |
| Entity set (Web API) | `msdyn_locationtypetemplateassociations` |
| Primary id attribute | `msdyn_locationtypetemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_locationtypetemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_locationtypetemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_locationtypetemplateassociations
PATCH /api/data/v9.2/msdyn_locationtypetemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_locationtypetemplateassociations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_functionallocationtype`, `msdyn_locationtypetemplateassociationid`, `msdyn_name`, `msdyn_propertytemplate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_locationtypetemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_locationtypetemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_locationtypetemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_locationtypetemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_locationtypetemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_locationtypetemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_locationtypetemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_locationtypetemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_functionallocationtype_msdyn_locationtypetemplateassociation_functionallocationtype` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `msdyn_functionallocationtype` | `msdyn_functionallocationtype` |
| `msdyn_msdyn_templateforproperties_msdyn_locationtypetemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_locationtypetemplateassociation_SyncErrors` | [msdyn_locationtypetemplateassociation](msdyn_locationtypetemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtypetemplateassociation` |
| `msdyn_locationtypetemplateassociation_AsyncOperations` | [msdyn_locationtypetemplateassociation](msdyn_locationtypetemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtypetemplateassociation` |
| `msdyn_locationtypetemplateassociation_MailboxTrackingFolders` | [msdyn_locationtypetemplateassociation](msdyn_locationtypetemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtypetemplateassociation` |
| `msdyn_locationtypetemplateassociation_UserEntityInstanceDatas` | [msdyn_locationtypetemplateassociation](msdyn_locationtypetemplateassociation.md) | `objectid` | `objectid_msdyn_locationtypetemplateassociation` |
| `msdyn_locationtypetemplateassociation_ProcessSession` | [msdyn_locationtypetemplateassociation](msdyn_locationtypetemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtypetemplateassociation` |
| `msdyn_locationtypetemplateassociation_BulkDeleteFailures` | [msdyn_locationtypetemplateassociation](msdyn_locationtypetemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_locationtypetemplateassociation` |
| `msdyn_locationtypetemplateassociation_PrincipalObjectAttributeAccesses` | [msdyn_locationtypetemplateassociation](msdyn_locationtypetemplateassociation.md) | `objectid` | `objectid_msdyn_locationtypetemplateassociation` |


## Source

Generated from [msdyn_locationtypetemplateassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_locationtypetemplateassociation')) on 2026-05-07.