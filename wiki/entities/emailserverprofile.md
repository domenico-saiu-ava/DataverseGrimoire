---
logical: "emailserverprofile"
display: "Email Server Profile"
entitySetName: "emailserverprofiles"
primaryId: "emailserverprofileid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Email Server Profile

Holds the Email Server Profiles of an organization

## Identity

| Property | Value |
| --- | --- |
| Logical name | `emailserverprofile` |
| Display name | Email Server Profile |
| Display (plural) | Email Server Profiles |
| Schema name | `EmailServerProfile` |
| Entity set (Web API) | `emailserverprofiles` |
| Primary id attribute | `emailserverprofileid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/emailserverprofiles?$select=name&$top=10
GET /api/data/v9.2/emailserverprofiles(<guid>)
POST /api/data/v9.2/emailserverprofiles
PATCH /api/data/v9.2/emailserverprofiles(<guid>)
DELETE /api/data/v9.2/emailserverprofiles(<guid>)
```

## Attributes

Writable: **64** · Read-only: **22**

### Writable

`AadResourceId`, `ACSEmailServiceName`, `ACSEnabledForOutgoingEmail`, `ACSEndpointUrl`, `ACSManagedIdentityId`, `ACSResourceGroupName`, `ACSSubscriptionId`, `DefaultServerLocation`, `Description`, `EmailServerProfileId`, `EncodingCodePage`, `EntityImage`, `ExchangeOnlineTenantId`, `ExchangeVersion`, `IncomingAuthenticationProtocol`, `IncomingCredentialRetrieval`, `IncomingPassword`, `IncomingPortNumber`, `IncomingServerLocation`, `IncomingUseImpersonation`, `IncomingUserName`, `IncomingUseSSL`, `keyvaultreferenceid`, `LastAuthorizationStatus`, `LastCrmMessage`, `LastTestExecutionStatus`, `LastTestRequest`, `LastTestResponse`, `LastTestStartTime`, `LastTestTotalExecutionTime`, `LastTestValidationStatus`, `managedidentityid`, `MaxConcurrentConnections`, `MinPollingIntervalInMinutes`, `MoveUndeliveredEmails`, `Name`, `OauthClientId`, `OauthClientSecret`, `OutgoingAuthenticationProtocol`, `OutgoingAutoGrantDelegateAccess`, `OutgoingCredentialRetrieval`, `OutgoingPassword`, `OutgoingPortNumber`, `OutgoingServerLocation`, `OutgoingUseImpersonation`, `OutgoingUsername`, `OutgoingUseSSL`, `OwnerEmailAddress`, `OwnerId`, `OwnerIdType`, `ProcessEmailsReceivedAfter`, `PurviewManagedIdentityId`, `SendEmailAlert`, `ServerAuthority`, `ServerType`, `StateCode`, `StatusCode`, `TimeoutMailboxConnection`, `TimeoutMailboxConnectionAfterAmount`, `TimeZoneRuleVersionNumber`, `UseAutoDiscover`, `UseDefaultTenantId`, `UseSameSettingsForOutgoingConnections`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EmailServerTypeName`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `IncomingPartnerApplication`, `IsIncomingPasswordSet`, `IsOauthClientSecretSet`, `IsOutgoingPasswordSet`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OutgoingPartnerApplication`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_emailserverprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `keyvaultreference_emailserverprofile_keyvaultreferenceid` | [keyvaultreference](keyvaultreference.md) | `keyvaultreferenceid` | `keyvaultreferenceid` |
| `lk_emailserverprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_emailserverprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_emailserverprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_emailserverprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `managedidentity_emailserverprofile_acsmanagedidentityid` | [managedidentity](managedidentity.md) | `acsmanagedidentityid` | `acsmanagedidentityid` |
| `managedidentity_emailserverprofile_managedidentityid` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `managedidentity_emailserverprofile_purviewmanagedidentityid` | [managedidentity](managedidentity.md) | `purviewmanagedidentityid` | `purviewmanagedidentityid` |
| `organization_emailserverprofile` | [organization](organization.md) | `organizationid` | `organizationid` |
| `owner_emailserverprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_emailserverprofile` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `EmailServerProfile_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `emailserverprofile_asyncoperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `emailserverprofile_bulkdeletefailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `emailserverprofile_duplicatebaserecord` | _n/a_ | `baserecordid` | _n/a_ |
| `emailserverprofile_duplicatematchingrecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `emailserverprofile_mailbox` | _n/a_ | `emailserverprofile` | _n/a_ |
| `EmailServerProfile_Organization` | _n/a_ | `defaultemailserverprofileid` | _n/a_ |
| `EmailServerProfile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `tracelog_EmailServerProfile` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [emailserverprofile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/emailserverprofile.md) on 2026-05-06.