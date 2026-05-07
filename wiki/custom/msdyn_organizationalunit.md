---
logical: "msdyn_organizationalunit"
display: "Unità organizzativa"
entitySetName: "msdyn_organizationalunits"
primaryId: "msdyn_organizationalunitid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Unità organizzativa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_organizationalunit` |
| Display name | Unità organizzativa |
| Display (plural) | Unità organizzative |
| Schema name | `msdyn_organizationalunit` |
| Entity set (Web API) | `msdyn_organizationalunits` |
| Primary id attribute | `msdyn_organizationalunitid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_organizationalunits?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_organizationalunits(<guid>)
POST /api/data/v9.2/msdyn_organizationalunits
PATCH /api/data/v9.2/msdyn_organizationalunits(<guid>)
DELETE /api/data/v9.2/msdyn_organizationalunits(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_address1`, `msdyn_address2`, `msdyn_address3`, `msdyn_city`, `msdyn_country`, `msdyn_latitude`, `msdyn_longitude`, `msdyn_name`, `msdyn_organizationalunitid`, `msdyn_postalcode`, `msdyn_stateorprovince`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_organizationalunit_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_organizationalunit_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_organizationalunit_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_organizationalunit_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_organizationalunit` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_organizationalunit_SyncErrors` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_DuplicateMatchingRecord` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_DuplicateBaseRecord` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `baserecordid` | `baserecordid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_AsyncOperations` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_MailboxTrackingFolders` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_UserEntityInstanceDatas` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `objectid` | `objectid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_ProcessSession` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_BulkDeleteFailures` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_PrincipalObjectAttributeAccesses` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `objectid` | `objectid_msdyn_organizationalunit` |
| `msdyn_organizationalunit_Annotations` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `objectid` | `objectid_msdyn_organizationalunit` |
| `msdyn_msdyn_organizationalunit_bookableresource_organizationalunit` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `msdyn_organizationalunit` | `msdyn_OrganizationalUnit` |
| `msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `msdyn_organizationalunit` | `msdyn_OrganizationalUnit` |


## Source

Generated from [msdyn_organizationalunit (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_organizationalunit')) on 2026-05-07.