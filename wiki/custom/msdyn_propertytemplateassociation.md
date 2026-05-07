---
logical: "msdyn_propertytemplateassociation"
display: "Associazione modelli di proprietà"
entitySetName: "msdyn_propertytemplateassociations"
primaryId: "msdyn_propertytemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Associazione modelli di proprietà

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertytemplateassociation` |
| Display name | Associazione modelli di proprietà |
| Display (plural) | Associazioni modelli di proprietà |
| Schema name | `msdyn_propertytemplateassociation` |
| Entity set (Web API) | `msdyn_propertytemplateassociations` |
| Primary id attribute | `msdyn_propertytemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertytemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertytemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_propertytemplateassociations
PATCH /api/data/v9.2/msdyn_propertytemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_propertytemplateassociations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_property`, `msdyn_propertytemplate`, `msdyn_propertytemplateassociationid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_propertytemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertytemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertytemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertytemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_propertytemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_propertytemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_propertytemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_propertytemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_property_msdyn_propertytemplateassociation_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |
| `msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertytemplateassociation_SyncErrors` | [msdyn_propertytemplateassociation](msdyn_propertytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertytemplateassociation` |
| `msdyn_propertytemplateassociation_AsyncOperations` | [msdyn_propertytemplateassociation](msdyn_propertytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertytemplateassociation` |
| `msdyn_propertytemplateassociation_MailboxTrackingFolders` | [msdyn_propertytemplateassociation](msdyn_propertytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertytemplateassociation` |
| `msdyn_propertytemplateassociation_UserEntityInstanceDatas` | [msdyn_propertytemplateassociation](msdyn_propertytemplateassociation.md) | `objectid` | `objectid_msdyn_propertytemplateassociation` |
| `msdyn_propertytemplateassociation_ProcessSession` | [msdyn_propertytemplateassociation](msdyn_propertytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertytemplateassociation` |
| `msdyn_propertytemplateassociation_BulkDeleteFailures` | [msdyn_propertytemplateassociation](msdyn_propertytemplateassociation.md) | `regardingobjectid` | `regardingobjectid_msdyn_propertytemplateassociation` |
| `msdyn_propertytemplateassociation_PrincipalObjectAttributeAccesses` | [msdyn_propertytemplateassociation](msdyn_propertytemplateassociation.md) | `objectid` | `objectid_msdyn_propertytemplateassociation` |


## Source

Generated from [msdyn_propertytemplateassociation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_propertytemplateassociation')) on 2026-05-07.