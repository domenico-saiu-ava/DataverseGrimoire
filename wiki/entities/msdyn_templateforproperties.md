---
logical: "msdyn_templateforproperties"
display: "Template For Properties"
entitySetName: "msdyn_templateforpropertieses"
primaryId: "msdyn_templateforpropertiesid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Template For Properties

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templateforproperties` |
| Display name | Template For Properties |
| Display (plural) | Templates For Properties |
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

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_templateforpropertiesId`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_templateforproperties` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_templateforproperties_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templateforproperties_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templateforproperties_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templateforproperties_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_templateforproperties` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_templateforproperties` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_templateforproperties` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate` | _n/a_ | `msdyn_propertytemplate` | _n/a_ |
| `msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate` | _n/a_ | `msdyn_propertytemplate` | _n/a_ |
| `msdyn_msdyn_templateforproperties_msdyn_locationtemplateassociation_PropertyTemplate` | _n/a_ | `msdyn_propertytemplate` | _n/a_ |
| `msdyn_msdyn_templateforproperties_msdyn_locationtypetemplateassociation_propertytemplate` | _n/a_ | `msdyn_propertytemplate` | _n/a_ |
| `msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate` | _n/a_ | `msdyn_propertytemplate` | _n/a_ |
| `msdyn_templateforproperties_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateforproperties_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateforproperties_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateforproperties_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_templateforproperties_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateforproperties_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_templateforproperties.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_templateforproperties.md) on 2026-05-06.