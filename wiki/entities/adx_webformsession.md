---
logical: "adx_webformsession"
display: "Multistep Form Session"
entitySetName: "adx_webformsessions"
primaryId: "adx_webformsessionid"
primaryName: "adx_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Multistep Form Session

Serves as a mechanism to log the occurrence of an incomplete multistep form entry for a given user so they can return and complete it later.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_webformsession` |
| Display name | Multistep Form Session |
| Display (plural) | Multistep Form Sessions |
| Schema name | `adx_webformsession` |
| Entity set (Web API) | `adx_webformsessions` |
| Primary id attribute | `adx_webformsessionid` |
| Primary name attribute | `adx_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_webformsessions?$select=adx_name&$top=10
GET /api/data/v9.2/adx_webformsessions(<guid>)
POST /api/data/v9.2/adx_webformsessions
PATCH /api/data/v9.2/adx_webformsessions(<guid>)
DELETE /api/data/v9.2/adx_webformsessions(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`adx_anonymousidentification`, `adx_contact`, `adx_currentstepindex`, `adx_name`, `adx_primaryrecordentitykeyname`, `adx_primaryrecordentitylogicalname`, `adx_primaryrecordid`, `adx_stephistory`, `adx_systemuser`, `adx_userhostaddress`, `adx_useridentityname`, `adx_webformsessionId`, `ImportSequenceNumber`, `mspp_webformid`, `mspp_webformstepid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_webformsession_contact` | [contact](contact.md) | `adx_contact` | `adx_contact` |
| `adx_webformsession_systemuser` | [systemuser](systemuser.md) | `adx_systemuser` | `adx_systemuser` |
| `lk_adx_webformsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_webformsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_webformsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_webformsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_adx_webformsession` | [organization](organization.md) | `organizationid` | `organizationid` |
| `powerpagecomponent_mspp_webformid_adx_webformsession` | [powerpagecomponent](powerpagecomponent.md) | `mspp_webformid` | `mspp_webformid` |
| `powerpagecomponent_mspp_webformstepid_adx_webformsession` | [powerpagecomponent](powerpagecomponent.md) | `mspp_webformstepid` | `mspp_webformstepid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_webformsession_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_webformsession_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_webformsession_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_webformsession_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `adx_webformsession_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_webformsession_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [adx_webformsession.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/adx_webformsession.md) on 2026-05-06.