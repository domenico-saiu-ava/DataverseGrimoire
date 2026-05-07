---
logical: "msdyn_templateforproperties"
display: "Modello per proprietà"
entitySetName: "msdyn_templateforpropertieses"
primaryId: "msdyn_templateforpropertiesid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello per proprietà

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templateforproperties` |
| Display name | Modello per proprietà |
| Display (plural) | Modelli per proprietà |
| Schema name | `msdyn_templateforproperties` |
| Entity set (Web API) | `msdyn_templateforpropertieses` |
| Primary id attribute | `msdyn_templateforpropertiesid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templateforpropertieses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templateforpropertieses(<guid>)
POST /api/data/v9.2/msdyn_templateforpropertieses
PATCH /api/data/v9.2/msdyn_templateforpropertieses(<guid>)
DELETE /api/data/v9.2/msdyn_templateforpropertieses(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_templateforpropertiesid`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_templateforproperties_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templateforproperties_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templateforproperties_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templateforproperties_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_templateforproperties` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_templateforproperties` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_templateforproperties` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_templateforproperties` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templateforproperties_SyncErrors` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateforproperties` |
| `msdyn_templateforproperties_AsyncOperations` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateforproperties` |
| `msdyn_templateforproperties_MailboxTrackingFolders` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateforproperties` |
| `msdyn_templateforproperties_UserEntityInstanceDatas` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `objectid` | `objectid_msdyn_templateforproperties` |
| `msdyn_templateforproperties_ProcessSession` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateforproperties` |
| `msdyn_templateforproperties_BulkDeleteFailures` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateforproperties` |
| `msdyn_templateforproperties_PrincipalObjectAttributeAccesses` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `objectid` | `objectid_msdyn_templateforproperties` |
| `msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |
| `msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |
| `msdyn_msdyn_templateforproperties_msdyn_locationtypetemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |
| `msdyn_msdyn_templateforproperties_msdyn_locationtemplateassociation_PropertyTemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_PropertyTemplate` |
| `msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |


## Source

Generated from [msdyn_templateforproperties (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_templateforproperties')) on 2026-05-07.